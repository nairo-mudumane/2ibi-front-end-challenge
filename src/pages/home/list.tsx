import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAll } from "../../services";
import { CardCountry, SectionTitle } from "../../components";
import { SkeletonCardCountry } from "./skeleton-card-country";
import { Alert } from "@mui/material";

export function List() {
  const {
    data: countries,
    isLoading,
    isError,
    error,
  } = useQuery(["/all"], getAll, {});

  if (isLoading) {
    return (
      <React.Fragment>
        <div className="mb-2">
          <SectionTitle text="World's Countries" />
        </div>

        <div className="flex flex-wrap items-start justify-between">
          <div className="flex-1 w-full mb-4 md:m-2 md:min-w-[20rem] lg:min-w-[16rem] xl:min-w-[19rem] 2xl:min-w-[24rem]">
            <SkeletonCardCountry />
          </div>

          <div className="flex-1 w-full mb-4 md:m-2 md:min-w-[20rem] lg:min-w-[16rem] xl:min-w-[19rem] 2xl:min-w-[24rem]">
            <SkeletonCardCountry />
          </div>

          <div className="flex-1 w-full mb-4 md:m-2 md:min-w-[20rem] lg:min-w-[16rem] xl:min-w-[19rem] 2xl:min-w-[24rem]">
            <SkeletonCardCountry />
          </div>

          <div className="flex-1 w-full mb-4 md:m-2 md:min-w-[20rem] lg:min-w-[16rem] xl:min-w-[19rem] 2xl:min-w-[24rem]">
            <SkeletonCardCountry />
          </div>

          <div className="flex-1 w-full mb-4 md:m-2 md:min-w-[20rem] lg:min-w-[16rem] xl:min-w-[19rem] 2xl:min-w-[24rem]">
            <SkeletonCardCountry />
          </div>

          <div className="flex-1 w-full mb-4 md:m-2 md:min-w-[20rem] lg:min-w-[16rem] xl:min-w-[19rem] 2xl:min-w-[24rem]">
            <SkeletonCardCountry />
          </div>
        </div>
      </React.Fragment>
    );
  }

  if (isError) {
    return (
      <React.Fragment>
        <div className="mb-2">
          <SectionTitle text="World's Countries" />
        </div>

        <div className="border border-red-300 shadow-sm rounded-lg transition hover:shadow-md hover:border-red-500">
          <div className="p-4">
            <Alert
              severity="error"
              variant="standard"
              sx={{ backgroundColor: "transparent" }}
            >
              <span className="text-md text-gray1">
                {/* @ts-ignore */}
                Error: {error.message}
              </span>
            </Alert>
          </div>
        </div>
      </React.Fragment>
    );
  }

  if (!countries || countries.length === 0) {
    return (
      <React.Fragment>
        <div className="mb-2">
          <SectionTitle text="World's Countries" />
        </div>

        <div className="border border-orange-300 shadow-sm rounded-lg transition hover:shadow-md hover:border-orange-500">
          <div className="p-4">
            <Alert
              severity="warning"
              variant="standard"
              sx={{ backgroundColor: "transparent" }}
            >
              <span className="text-md text-gray1">No records found</span>
            </Alert>
          </div>
        </div>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <div className="mb-2">
        <SectionTitle text="World's Countries" />
      </div>

      <div className="flex flex-wrap items-start justify-between">
        {countries.map((country) => (
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
