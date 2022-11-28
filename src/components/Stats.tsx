import React, { useEffect, useState } from "react";
import JSZip from "jszip";
import Dropzone from "react-dropzone";
import Table from "./Table";
import Chart from "./Chart";
import Summary from "./Summary";
import "./Stats.css";
import { from } from "linq-to-typescript";
import { StatsData, StatsProvider } from "./StatsContext";
import { WatchEntry } from "../models/WatchEntry";

interface StatsProps {}

interface StatsState {
  progress: number;
  files: File[];
  jsonFiles: File[];
  data: StatsData;
}

const Stats: React.FC<StatsProps> = (props) => {
  const [state, setState] = useState<StatsState>({
    progress: 0,
    files: [],
    jsonFiles: [],
    data: {
      listeningHistory: [],
      since: new Date(),
      to: new Date(),
      allData: [],
      minDate: new Date(),
      maxDate: new Date(),
    },
  });

  useEffect(() => {
    if (state.files.length === 0) return;

    if (state.files[0].name.endsWith(".zip")) {
      const zip = new JSZip();
      zip.loadAsync(state.files[0]).then((f) => {
        Promise.all(
          Object.keys(f.files).map((filename) => {
            if (!filename.endsWith(".json")) return undefined;
            return f.files[filename].async("string").then((fileData) => {
              return new File([fileData], filename);
            });
          })
        ).then((res) => {
          let jsonFiles: File[] = [];
          res.forEach((r) => {
            if (r instanceof File) {
              jsonFiles.push(r);
            }
          });
          setState((s) => ({ ...s, jsonFiles: jsonFiles }));
        });
      });
    } else {
      setState((s) => ({ ...s, progress: 3 }));
    }
  }, [state.files]);

  useEffect(() => {
    if (state.jsonFiles.length === 0) return;

    Promise.all(state.jsonFiles.map(loadFile)).then((results) => {
      try {
        const entries = results
          .map((r) => JSON.parse(r as string) as WatchEntry[])
          .flat();
        entries.forEach(
          (x) => (x.title = x.title.substring(x.title.indexOf(" ")))
        );
        const ordered = from(entries)
          .where((x) => x.subtitles && x.subtitles.length > 0)
          .orderBy((x) => x.time)
          .groupBy((x) => x.time + x.title)
          .select((x) => x.first());
        const listeningEntries = ordered
          .select((e) => ({
            title: e.title || "UNKNOWN",
            channelName:
              e.subtitles?.length > 0 ? e.subtitles[0].name : "UNKNOWN",
            time: new Date(e.time),
            titleUrl: e.titleUrl,
            channelUrl:
              e.subtitles?.length > 0 ? e.subtitles[0].url : "UNKNOWN",
          }))
          .toArray();

        if (listeningEntries.length === 0) {
          setState((s) => ({ ...s, progress: 3 }));
        } else {
          const from = listeningEntries[0].time;
          const to = listeningEntries[listeningEntries.length - 1].time;
          setState((s) => ({
            ...s,
            progress: 2,
            data: {
              listeningHistory: listeningEntries,
              since: from,
              to: to,
              minDate: from,
              maxDate: to,
              allData: listeningEntries,
            },
          }));
          let summary = document.getElementById("summary");
          if (summary) summary!.scrollIntoView();
        }
      } catch (e) {
        setState((s) => ({ ...s, progress: 3 }));
      }
    });
  }, [state.jsonFiles]);

  const loadFiles = (files: File[]) => {
    setState({ ...state, progress: 1, files: files });
  };

  const loadFile = (file: File) =>
    new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        resolve(e.target?.result);
      };
      fileReader.onerror = fileReader.onabort = reject;
      fileReader.readAsText(file);
    });

  const dateChanged = (since: Date, to: Date) => {
    const newData = from(state.data.allData)
      .where((x) => x.time >= since && x.time <= to)
      .toArray();
    setState({
      ...state,
      data: { ...state.data, since: since, to: to, listeningHistory: newData },
    });
  };

  return state.progress === 0 || state.progress === 3 ? (
    <section>
      <Dropzone onDrop={loadFiles}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>
              Drag and drop your Google Takeout file here, or click to select
              file
            </p>
          </div>
        )}
      </Dropzone>
      {state.progress === 3 && (
        <p>
          Could not load your file. Make sure you've selected the correct Google
          Takeout file with JSON data inside
        </p>
      )}
    </section>
  ) : state.progress === 1 ? (
    <section id="otherUnits">
      <h2 className="text-center display-4">Loading...</h2>
    </section>
  ) : (
    <React.Fragment>
      <StatsProvider value={state.data}>
        <section id="summary">
          <Summary dateChanged={dateChanged} />
        </section>
        <section id="chart">
          <Chart description="Videos watched over time" />
        </section>
        <section id="table">
          <Table />
        </section>
      </StatsProvider>
    </React.Fragment>
  );
};

Stats.displayName = Stats.name;

export default Stats;
