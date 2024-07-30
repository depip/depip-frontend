export interface IChat {
  from: string;
  value: IChatContent[];
}

export interface IChatContent {
  type: "script" | "string" | "image";
  content: string;
  json?: any;
  file?: any;
}

export enum PIL_TYPE {
  NON_COMMERCIAL_REMIX,
  COMMERCIAL_USE,
  COMMERCIAL_REMIX,
}
