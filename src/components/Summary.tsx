import React, { useContext } from "react";
import { from } from "linq-to-typescript";
import Comparer from "../models/Comparer";
import StatsContext from "./StatsContext";

const Summary: React.FC = () => {
  const context = useContext(StatsContext);

  const data = from(context.listeningHistory);

  const totalPlayCount = data.count();

  const differentTracks = data.select(x => x.channelName + x.title).distinct().count();
  const differentArtists = data.select(x => x.channelName).distinct().count();

  const top10TracksPlayCount = data.groupBy(x => x.title + x.channelName)
    .select(x => x.count())
    .orderByDescending(x => x, Comparer)
    .take(Math.round(differentTracks / 10))
    .sum();

  const top10ArtistsPlayCount = data.groupBy(x => x.channelName)
    .select(x => x.count())
    .orderByDescending(x => x)
    .take(Math.round(differentArtists / 10))
    .sum();

  const summary = {
    totalPlayCount: totalPlayCount,
    differentTracks: differentTracks,
    differentArtists: differentArtists,
    top10tracksShare: top10TracksPlayCount / totalPlayCount,
    top10artistsShare: top10ArtistsPlayCount / totalPlayCount,
  };

  return (
    <React.Fragment>
      <span className="section-header mb-3">Summary</span>

      <p className="text-center" style={{ fontSize: "large" }}>
        Since {context.since.toLocaleDateString()} to {context.to.toLocaleDateString()} you've watched <br />
        <span className="display-4">{summary.totalPlayCount} videos</span> on YouTube.
      </p>
    </React.Fragment >
  );
}

export default Summary;