import React from "react";
import { api } from "../../services";
import { ICountry } from "../../types";
import { formatUrl } from "../../utils";
import { IChildren, IFilterContext } from "./types";

export const FilterQueryContext = React.createContext<IFilterContext>(
  {} as IFilterContext
);

export const FilterQueryContextProvider = (props: IChildren) => {
  const [query, setQuery] = React.useState<string>("");
  const [countries, setCountries] = React.useState<ICountry[] | null>(null);

  const search = async (newQuery: string): Promise<void> => {
    try {
      setQuery(newQuery);
      await api
        .get<ICountry[]>(`/name/${formatUrl(newQuery)}`)
        .then((response) => {
          setCountries(response.data);
        });
    } catch (error) {
      console.error(error);
      setCountries([]);
    }
  };

  return (
    <FilterQueryContext.Provider value={{ query, search, results: countries }}>
      {props.children}
    </FilterQueryContext.Provider>
  );
};
