import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAll } from "../../services";
import { CardCountry, PageContainer, SectionTitle } from "../../components";

export function List() {
  const {
    data: countries,
    isLoading,
    isError,
    error,
  } = useQuery(["/all"], getAll, {});

  return (
    <PageContainer>
      <div className="mb-2">
        <SectionTitle text="World's Countries" />
      </div>

      <div className="flex flex-wrap">
        {countries &&
          countries.map((country) => (
            <CardCountry key={country.name.official} country={country} />
          ))}
      </div>
    </PageContainer>
  );
}
