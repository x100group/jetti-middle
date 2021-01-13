import { DocTypes } from "./types";
import { Ref } from "./document";

export interface INoSqlDocument {
    id: Ref;
    date: Date;
    type: DocTypes;
    code: string;
    description: string;
    company: Ref;
    user: Ref;
    posted: boolean;
    deleted: boolean;
    isfolder: boolean;
    parent: Ref;
    info: string;
    timestamp: Date;
    ExchangeCode?: string;
    ExchangeBase?: string;
    doc: { [x: string]: any };
    docByKeys?: { key: string, value: any }[];
  }
  
  export interface IFlatDocument {
    id: Ref;
    date: Date;
    type: DocTypes;
    code: string;
    description: string;
    company: Ref;
    user: Ref;
    posted: boolean;
    deleted: boolean;
    isfolder: boolean;
    parent: Ref;
    info: string;
    timestamp: Date | null;
    ExchangeCode?: string;
    ExchangeBase?: string;
  }