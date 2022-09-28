import React from "react";
import { Avatar, Button, Tooltip } from "@mui/material";
import { StyledCardCountry } from "./styles";
import { ICardCountryProps } from "./types";
import {
  AccessTime,
  Groups,
  LocationCity,
  Phone,
  Pin,
  Public,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { formatNumber, formatUrl } from "../../utils";

export function CardCountry({ country, ...props }: ICardCountryProps) {
  return (
    <div
      className={`${
        props.className && props.className
      } border border-blue2 shadow-sm rounded-xl transition hover:shadow-md hover:border-blue1`}
    >
      <StyledCardCountry
        flag={country.flags.png}
        className="rounded-xl overflow-hidden"
      >
        <div className="flag bg-top bg-no-repeat bg-cover">
          <div className="pt-14">
            <div className="bg-white1 rounded-t-2xl border-t-2 border-blue2 hover:border-blue1">
              <div className="px-4">
                <div className="flex items-start justify-between relative">
                  <Link to={`/countries/${formatUrl(country.name.common)}`}>
                    <Tooltip title={`Visit ${country.name.official}`}>
                      <Avatar
                        src={country.flags.svg}
                        alt={country.name.official}
                        sx={{ width: 56, height: 56 }}
                        className="absolute top-[-1rem] border-[3px] border-white1"
                      />
                    </Tooltip>
                  </Link>

                  <div className="pt-1">
                    <Tooltip title="International Dialing Prefix" arrow>
                      <div className="mb-1 text-[0.8em] text-white1 bg-blue1 rounded px-1">
                        <Phone fontSize="small" />
                        <span>{country.idd.root}</span>
                      </div>
                    </Tooltip>
                  </div>
                </div>

                <div className="my-1">
                  <div className="mb-4 flex flex-wrap items-center justify-between">
                    <h2 className="mb-1 text-lg font-bold lg:text-lg">
                      <Link
                        className="link"
                        to={`/countries/${formatUrl(country.name.common)}`}
                      >
                        {country.name.official}
                      </Link>
                    </h2>

                    <p className="mb-1 text-xs text-gray1 flex items-center md:text-sm">
                      <span className="font-semibold mr-1">Capital:</span>
                      {country.capital}
                    </p>
                  </div>

                  <div className="text-sm text-gray1 md:text-md">
                    <p className="mb-1 flex items-center">
                      <Public fontSize="small" className="mr-1" />
                      {country.region}, {country.subregion}
                    </p>

                    <p className="mb-1 flex items-center">
                      <AccessTime fontSize="small" className="mr-1" />
                      <span>{country.timezones[0]}</span>
                    </p>

                    <p className="mb-1 flex items-center">
                      <Groups fontSize="small" className="mr-1" />
                      {formatNumber(country.population, 1)}
                    </p>

                    <p className="mb-1 flex items-center">
                      <Public fontSize="small" className="mr-1" />
                      {formatNumber(country.area, 1)} km²
                    </p>
                  </div>

                  <div className="w-max pb-1 ml-auto">
                    <Link to={`/countries/${formatUrl(country.name.common)}`}>
                      <Button
                        className="!border-blue2 !text-blue1 hover:!border-blue1 hover:!font-semibold"
                        variant="outlined"
                      >
                        Ver mais
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledCardCountry>
    </div>
  );
}
