import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAll } from "../../services";
import { CardCountry, SectionTitle } from "../../components";

export function List() {
  const {
    data: countries,
    isLoading,
    isError,
    error,
  } = useQuery(["/all"], getAll, {});

  return (
    <React.Fragment>
      <div className="mb-2">
        <SectionTitle text="World's Countries" />
      </div>

      <div className="flex flex-wrap items-start justify-between">
        {countries &&
          countries.map((country) => (
            <div
              key={country.name.official}
              className="flex-1 w-full mb-4 md:m-2 md:min-w-[20rem] lg:min-w-[16rem] xl:min-w-[19rem] 2xl:min-w-[24rem]"
            >
              <CardCountry country={country} className="w-full min-w-[300px]" />
            </div>
          ))}
      </div>
    </React.Fragment>
  );
}
