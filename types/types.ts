export interface IChat {
  from: string;
  value: IChatContent[];
}

export interface IChatContent {
  type: "script" | "string" | "image" | "link";
  content: string;
  json?: any;
  file?: any;
  link?: string;
}