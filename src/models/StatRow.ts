import { CSSProperties } from "react";
import { ListeningEntry } from "./listeningEntry";

export interface StatRow {
    title: string;
    titleUrl: string;
    channelName: string;
    channelUrl: string;
    playedTimes: number;
    id: number;
    entries: ListeningEntry[];
}

export interface StatColumn {
    header: string,
    selector: (x: StatRow) => any,
    style: CSSProperties
}