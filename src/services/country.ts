import { ICountry } from "../types";
import { api } from "./axios";

export async function getAll(): Promise<ICountry[] | undefined> {
  try {
    const countries = await api.get<ICountry[]>("/all").then((response) => {
      return response.data;
    });
    return countries;
  } catch (error: any | Error) {
    console.error(error);
    throw new Error(error.message);
  }
}
