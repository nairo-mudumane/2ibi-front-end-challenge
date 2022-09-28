import React from "react";
import { FilterQueryContext } from "../contexts";

export function useSearch() {
  const context = React.useContext(FilterQueryContext);
  return context;
}
