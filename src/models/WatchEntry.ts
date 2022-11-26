export interface WatchEntry {
    title: string;
    titleUrl: string;
    subtitles: Subtitles[];
    time: string;
}

export interface Subtitles {
    name: string;
    url: string;
}