export interface IChat {
  from: string;
  value: IRepplyContent[];
}

export interface IRepplyContent {
  type: "script" | "string";
  content: string;
  json?: any;
}

export enum PIL_TYPE {
  NON_COMMERCIAL_REMIX,
  COMMERCIAL_USE,
  COMMERCIAL_REMIX,
}
