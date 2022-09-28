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
      } w-full mb-4 border border-gray3 shadow-sm rounded-xl transition hover:shadow-md hover:border-gray2`}
    >
      <StyledCardCountry
        flag={country.flags.png}
        className="rounded-xl overflow-hidden"
      >
        <div className="flag bg-top bg-no-repeat bg-cover">
          <div className="pt-14">
            <div className="bg-white1 rounded-t-2xl">
              <div className="px-4">
                <div className="flex items-start justify-between relative">
                  <Link to={`/countries/${formatUrl(country.name.common)}`}>
                    <Tooltip title={`Visit ${country.name.official}`}>
                      <Avatar
                        className="absolute top-[-1rem] border-[3px] border-white1"
                        src={country.flags.svg}
                        alt={country.name.official}
                      />
                    </Tooltip>
                  </Link>

                  <div className="pt-1">
                    <Tooltip title="International Dialing Prefix" arrow>
                      <div className="text-[0.8em] text-white1 bg-blue1 rounded px-1">
                        <Phone fontSize="small" />
                        <span>{country.idd.root}</span>
                      </div>
                    </Tooltip>
                  </div>
                </div>

                <div className="my-2">
                  <div className="mb-2 flex items-start justify-between">
                    <h2 className="text-md font-bold">
                      <Link
                        className="link"
                        to={`/countries/${formatUrl(country.name.common)}`}
                      >
                        {country.name.official}
                      </Link>
                    </h2>

                    <p className="flex text-gray1 items-center mb-2">
                      <Public fontSize="small" className="mr-1" />
                      {country.region}, {country.subregion}
                    </p>
                  </div>

                  <div className="mb-1 text-gray1 text-md">
                    <p className="flex items-center mb-2">
                      <span className="font-semibold mr-2">Capital:</span>
                      {country.capital}
                    </p>

                    <div className="text-gray1 text-md flex items-center">
                      <AccessTime fontSize="small" className="mr-1" />
                      <span>{country.timezones[0]}</span>
                    </div>

                    <p className="flex items-center">
                      <Groups fontSize="small" className="mr-1" />
                      {formatNumber(country.population, 1)}
                    </p>

                    <p className="flex items-center">
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
