import React from "react";
import { useInputText } from "../../hooks";
import { Loading } from "../../components/loading";
import { ISearchInputProps } from "./types";

export function SearchInput(props: ISearchInputProps) {
  const initialValues = {
    query: props.query ? props.query : "",
  };
  const input = useInputText(initialValues);

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="search-section relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          {isLoading ? (
            <Loading className="!p-0 w-5 h-5 text-gray-500" />
          ) : (
            <svg
              className="w-5 h-5 text-gray-500"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </div>

        <input
          type="search"
          name="query"
          id="search-navbar"
          className="block p-2 pl-10 w-full text-gray1 bg-gray3 rounded-lg border border-gray2 sm:text-sm hover:border-gray1 focus:ring-blue1 focus:border-blue1"
          placeholder="Procurar..."
          value={input.query}
          onChange={input.handleInputChange}
        />
      </div>
    </form>
  );
}
