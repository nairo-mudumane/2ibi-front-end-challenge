export interface ISearchResultsProps {
  query?: string;
  className?: string;
}

export interface IFilterInputProps extends ISearchResultsProps {}

export interface ISearchInputProps extends ISearchResultsProps {}
