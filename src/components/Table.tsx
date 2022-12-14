import { from } from "linq-to-typescript";
import React, { useState, useEffect, useContext } from "react";
import { ButtonGroup, Button } from "reactstrap";
import "./Table.css";
import Comparer from "../models/Comparer";
import { StatColumn, StatRow } from "../models/StatRow";
import Ranking from "./Ranking";
import { ListeningEntry } from "../models/listeningEntry";
import Chart from "./Chart";
import StatsContext from "./StatsContext";

interface TabProps {}

interface TabState {
  tableType: TableType;
  searchPhrase: string;
  orderByColumn: number;
  descendingOrder: boolean;
  scrollPosition: number;
  data: StatRow[];
  listeningHistorySubset: ListeningEntry[];
  subsetDescription: string;
}

enum TableType {
  trackAndArtist = 0,
  artistOnly = 1,
}

const Table: React.FC<TabProps> = (props) => {
  const [state, setState] = useState<TabState>({
    tableType: TableType.artistOnly,
    searchPhrase: "",
    orderByColumn: 0,
    descendingOrder: false,
    scrollPosition: 0,
    data: [],
    listeningHistorySubset: [],
    subsetDescription: "",
  });

  const groupByProperty = (
    type: TableType
  ): ((x: ListeningEntry) => string) => {
    switch (type) {
      case TableType.trackAndArtist:
        return (x) => x.titleUrl;
      case TableType.artistOnly:
        return (x) => x.channelUrl;
    }
  };

  const context = useContext(StatsContext);

  useEffect(() => {
    let prevCount = 0;
    let prevId = 1;

    let result = from(context.listeningHistory)
      .groupBy(groupByProperty(state.tableType))
      .select((x) => ({ x, count: x.count() }))
      .orderByDescending((x) => x.count, Comparer)
      .select(({ x, count }, i) => {
        const id = count === prevCount ? prevId : i + 1;
        const res = {
          ...x.first(),
          id: id,
          playedTimes: count,
          entries: x.toArray(),
        };
        prevCount = count;
        prevId = id;
        return res;
      })
      .where(
        (x) =>
          x.channelName.toLowerCase().indexOf(state.searchPhrase) > -1 ||
          (state.tableType === TableType.trackAndArtist &&
            x.title.toLowerCase().indexOf(state.searchPhrase) > -1)
      );

    switch (state.orderByColumn) {
      case 0:
        result = result.orderBy((x) => x.id, Comparer);
        break;
      case 1:
        result = result.orderBy((x) => x.title);
        break;
      case 2:
        result = result.orderBy((x) => x.channelName);
        break;
      case 3:
        result = result.orderBy((x) => x.id, Comparer);
        break;
    }

    if (state.descendingOrder) result = result.reverse();

    setState((s) => ({ ...s, data: result.toArray() }));
  }, [
    context.listeningHistory,
    state.descendingOrder,
    state.orderByColumn,
    state.searchPhrase,
    state.tableType,
  ]);

  const orderByChanged = (column: number) => {
    if (state.orderByColumn === column)
      setState({ ...state, descendingOrder: !state.descendingOrder });
    else setState({ ...state, descendingOrder: false, orderByColumn: column });
  };

  const typeChanged = (type: TableType) =>
    setState({
      ...state,
      tableType: type,
      orderByColumn: 0,
      descendingOrder: false,
    });

  const onRowSelected = (row: StatRow) => {
    const description =
      state.tableType === TableType.artistOnly
        ? row.channelName
        : `${row.title} by ${row.channelName}`;
    setState({
      ...state,
      listeningHistorySubset: row.entries,
      subsetDescription: description,
    });
  };

  const onSearchedTextChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, searchPhrase: e.target.value.toLowerCase() });
  };

  const columns: StatColumn[] = [
    {
      header: "#",
      selector: (x: StatRow) => x.id,
      style: { flex: 1 },
    },
    {
      header: "Title",
      selector: (x: StatRow) => x.title,
      style: {
        flex: 10,
        ...(state.tableType === TableType.artistOnly ? {display: "none"} : {})
      },
    },
    {
      header: "Channel",
      selector: (x: StatRow) => x.channelName,
      style: { flex: 10 },
    },
    {
      header: "Your views",
      selector: (x: StatRow) => x.playedTimes,
      style: { flex: 2 },
    },
    {
      header: "Watch",
      selector: (x: StatRow) =>
        state.tableType === TableType.trackAndArtist
          ? x.titleUrl
          : x.channelUrl,
      style: { flex: 1, textAlign: "center" },
      isLink: true,
    }
  ];

  return (
    <React.Fragment>
      <div className="d-flex align-items-center mb-1">
        <div style={{ flex: 1 }}>
          <span className="section-header">Most watched</span>
        </div>
        <div style={{ flex: 1 }}>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            style={{ borderRadius: 50 }}
            onChange={onSearchedTextChanged}
          />
          <small>Found: {state.data.length}</small>
        </div>
      </div>

      <ButtonGroup className="d-flex mb-3" size="md">
        <Button
          active={state.tableType === TableType.trackAndArtist}
          color="primary"
          onClick={() => typeChanged(TableType.trackAndArtist)}
        >
          Most watched videos
        </Button>
        <Button
          active={state.tableType === TableType.artistOnly}
          color="primary"
          onClick={() => typeChanged(TableType.artistOnly)}
        >
          Most watched channels
        </Button>
      </ButtonGroup>

      <div className="data-header">
        {columns.map((x, i) => (
          <div
            key={i}
            className={
              "data-cell" + (state.orderByColumn === i ? " order-by" : "")
            }
            style={x.style}
            onClick={() => orderByChanged(i)}
          >
            {x.header}
          </div>
        ))}
      </div>

      <Ranking
        data={state.data}
        columns={columns}
        onSubsetChanged={onRowSelected}
      />
      <Chart
        description={`Details for ${state.subsetDescription}`}
        subset={state.listeningHistorySubset}
      />
    </React.Fragment>
  );
};

export default Table;
