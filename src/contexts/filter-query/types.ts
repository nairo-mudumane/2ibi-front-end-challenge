import { ReactNode } from "react";
import { ICountry } from "../../types";

export interface IChildren {
  children: ReactNode;
}

export interface INotFound {
  status: number;
  message: string;
}

export interface IFilterContext {
  query: string;
  results: ICountry[] | null;
  search: (newQuery: string) => Promise<void>;
}
