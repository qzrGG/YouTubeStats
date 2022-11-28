import React, { useContext } from "react";
import { from } from "linq-to-typescript";
import StatsContext from "./StatsContext";
import { round } from "../common/math.helper";
import DatePicker from "react-date-picker";
import { Button, ButtonGroup } from "reactstrap";

export interface SummaryProps {
  dateChanged: (since: Date, to: Date) => void;
}

const Summary: React.FC<SummaryProps> = (props) => {
  const context = useContext(StatsContext);

  const data = from(context.listeningHistory);

  const totalPlayCount = data.count();

  const differentArtists = data
    .select((x) => x.channelUrl)
    .distinct()
    .count();

  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(
    context.since.getFullYear(),
    context.since.getMonth(),
    context.since.getDate()
  );
  const utc2 = Date.UTC(
    context.to.getFullYear(),
    context.to.getMonth(),
    context.to.getDate()
  );

  const days = Math.floor((utc2 - utc1) / _MS_PER_DAY);

  const summary = {
    totalPlayCount: totalPlayCount,
    differentArtists: differentArtists,
    dailyAverage: round(totalPlayCount / days, 1),
  };

  const now = new Date();

  return (
    <React.Fragment>
      <span className="section-header mb-3">Summary</span>
      <ButtonGroup className="d-flex mb-3" size="sm">
        <Button
          color="primary"
          onClick={() => props.dateChanged(context.minDate, context.maxDate)}
        >
          All time
        </Button>
        <Button
          color="primary"
          onClick={() =>
            props.dateChanged(
              new Date(now.getFullYear() - 1, now.getMonth(), now.getDate()),
              now
            )
          }
        >
          Last 12 months
        </Button>
        <Button
          color="primary"
          onClick={() =>
            props.dateChanged(
              new Date(now.getFullYear(), 0, 1, 0, 0, 0, 0),
              context.maxDate
            )
          }
        >
          This year
        </Button>
      </ButtonGroup>

      <p className="text-center" style={{ fontSize: "large" }}>
        Since{" "}
        <DatePicker
          value={context.since}
          clearIcon={null}
          minDate={context.minDate}
          maxDate={context.to}
          onChange={(c: any) => props.dateChanged(c, context.to)}
        />{" "}
        to{" "}
        <DatePicker
          value={context.to}
          clearIcon={null}
          minDate={context.since}
          maxDate={context.maxDate}
          onChange={(c: any) => props.dateChanged(context.since, c)}
        />{" "}
        you've watched <br />
        <span className="display-2">{summary.totalPlayCount} videos</span>
        <br />
        from{" "}
        <span className="display-3">{summary.differentArtists} channels</span>
        <br />
        for an average of{" "}
        <span className="display-4">{summary.dailyAverage} videos a day</span>
      </p>
    </React.Fragment>
  );
};

export default Summary;
