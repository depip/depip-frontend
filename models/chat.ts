export interface IChat {
  from: string;
  value: IRepplyContent[];
}

export interface IRepplyContent {
  type: "script" | "string";
  content: string;
  json?: any;
}
