export interface ICountrySpa {
  official: string;
  common: string;
}

export interface ICountryNativeName {
  spa: ICountrySpa;
}

export interface Name {
  common: string;
  official: string;
  nativeName: ICountryNativeName;
}

export interface ICountryGTQ {
  name: string;
  symbol: string;
}

export interface Currencies {
  GTQ: ICountryGTQ;
}

export interface ICountryIdd {
  root: string;
  suffixes: string[];
}

export interface ICountryLanguages {
  spa: string;
}

export interface ICountryTranslations {}

export interface ICountryEng {
  f: string;
  m: string;
}

export interface ICountryFra {
  f: string;
  m: string;
}

export interface ICountryDemonyms {
  eng: ICountryEng;
  fra: ICountryFra;
}

export interface ICountryMaps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface ICountryGini {
  2014: number;
}

export interface ICountryCar {
  signs: string[];
  side: string;
}

export interface ICountryFlags {
  png: string;
  svg: string;
}

export interface ICountryCoatOfArms {
  png: string;
  svg: string;
}

export interface ICountryCapitalInfo {
  latlng: number[];
}

export interface ICountryPostalCode {
  format: string;
  regex: string;
}

export interface ICountry {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: ICountryIdd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: ICountryLanguages;
  translations: ICountryTranslations;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: ICountryDemonyms;
  flag: string;
  maps: ICountryMaps;
  population: number;
  gini: ICountryGini;
  fifa: string;
  car: ICountryCar;
  timezones: string[];
  continents: string[];
  flags: ICountryFlags;
  coatOfArms: ICountryCoatOfArms;
  startOfWeek: string;
  capitalInfo: ICountryCapitalInfo;
  postalCode: ICountryPostalCode;
}
