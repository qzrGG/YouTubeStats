import { useContext, useState } from "react";
import React from "react";
import { ButtonGroup, Button } from "reactstrap";
import { LineChart, CartesianGrid, XAxis, YAxis, Line, Tooltip, ResponsiveContainer } from "recharts";
import { from, range } from "linq-to-typescript";
import Comparer from "../models/Comparer";
import StatsContext from "./StatsContext";
import { ListeningEntry } from "../models/listeningEntry";

export interface ChartProps {
  description: string;
  subset?: ListeningEntry[];
}

interface ChartState {
  chartFuncId: number;
}

const Chart: React.FC<ChartProps> = (props) => {
  const [state, setState] = useState<ChartState>({ chartFuncId: 0 });
  const context = useContext(StatsContext);
  const small = props.subset !== undefined;

  const chartFuncs: ((x: Date) => number)[] = [
    x => x.getHours(),
    x => x.getDay() === 0 ? 7 : x.getDay(),
    x => monthValue(x)
  ];

  const daysOfWeek: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const xAxisFuncs: ((x: { name: number }) => string)[] = [
    x => x.name.toString().padStart(2, '0'),
    x => daysOfWeek[x.name],
    x => `${(x.name % 100).toString().padStart(2, '0')}.${Math.floor(x.name / 100) - 2000}`
  ];

  const monthValue = (date: Date): number => date.getFullYear() * 100 + date.getMonth() + 1;

  const monthDiff = (d1: Date, d2: Date) => {
    let months = 0;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }

  const nthMonth = (n: number): number => {
    const firstDate = new Date(context.since);
    const nthDate = new Date(firstDate.setMonth(firstDate.getMonth() + n));
    return monthValue(nthDate);
  }

  const emptyData: { name: number, totalTime: number, totalPlaybacks: number, mostPlayedTrack: string, mostPlayedArtist: string }[][] = [
    range(0, 24).select(x => ({ name: x, totalTime: 0, totalPlaybacks: 0, mostPlayedTrack: "", mostPlayedArtist: "" })).toArray(),
    range(1, 7).select(x => ({ name: x, totalTime: 0, totalPlaybacks: 0, mostPlayedTrack: "", mostPlayedArtist: "" })).toArray(),
    range(0, monthDiff(context.since, context.to)).select(x => ({ name: nthMonth(x), totalTime: 0, totalPlaybacks: 0, mostPlayedTrack: "", mostPlayedArtist: "" })).toArray()
  ];


  const chartData = from(props.subset !== undefined ? props.subset : context.listeningHistory)
    .groupBy(x => chartFuncs[state.chartFuncId](x.time))
    .select(g => ({
      name: g.key,
      totalPlaybacks: g.count(),
      mostPlayedTrack: g.groupBy(x => x.titleUrl).select(x => ({ data: x, count: x.count() })).orderByDescending(x => x.count, Comparer).select(x => `${x.data.first().title} by ${x.data.first().channelName} (${x.count})`).first(),
      mostPlayedArtist: g.groupBy(x => x.channelUrl).select(x => ({ data: x, count: x.count() })).orderByDescending(x => x.count, Comparer).select(x => `${x.data.first().channelName} (${x.count})`).first()
    }))
    .union(emptyData[state.chartFuncId])
    .groupBy(x => x.name)
    .select(x => x.first())
    .toArray();

  if (props.subset !== undefined && props.subset.length === 0) {
    return (<p>Select a track or an artist in the table to see it's details</p>);
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload[0].payload?.totalPlaybacks > 0) {
      return (
        <div className="custom-tooltip">
          <p className="label">{label}</p>
          <p className="desc">Total videos watched: {payload[0].payload.totalPlaybacks}<br />
            Favorite video: {payload[0].payload.mostPlayedTrack}<br />
            Favorite channel: {payload[0].payload.mostPlayedArtist}<br />
          </p>
        </div>
      );
    }

    return null;
  };

  return (
    <React.Fragment>
      <span className={small ? 'mb-2' : 'section-header mb-3'}>{props.description}</span>

      <ButtonGroup className="d-flex mb-3" size={small ? "sm" : "md"}>
        <Button active={state.chartFuncId === 0} color="primary" onClick={() => setState({ chartFuncId: 0 })}>Hours</Button>
        <Button active={state.chartFuncId === 1} color="primary" onClick={() => setState({ chartFuncId: 1 })}>Days of week</Button>
        <Button active={state.chartFuncId === 2} color="primary" onClick={() => setState({ chartFuncId: 2 })}>Months</Button>
      </ButtonGroup>
      <ResponsiveContainer width="100%" height="70%">
        <LineChart
          data={chartData}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey={xAxisFuncs[state.chartFuncId]} />
          <YAxis />
          <Tooltip content={CustomTooltip} />
          <Line type="monotone" dataKey="totalPlaybacks" stroke="#ff5d5f" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment >);
}

export default Chart;