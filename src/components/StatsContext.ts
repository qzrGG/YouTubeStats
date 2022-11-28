import React from "react";
import { ListeningEntry } from "../models/listeningEntry";

export interface StatsData {
  listeningHistory: ListeningEntry[];
  allData: ListeningEntry[];
  since: Date;
  to: Date;
  minDate: Date;
  maxDate: Date;
}
const StatsContext = React.createContext<StatsData>({
  listeningHistory: [],
  since: new Date(),
  to: new Date(),
  allData: [],
  minDate: new Date(),
  maxDate: new Date(),
});

export const StatsProvider = StatsContext.Provider;
export default StatsContext;
