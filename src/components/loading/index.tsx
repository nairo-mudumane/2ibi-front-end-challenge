import gif from "../../assets/loading.gif";
import { LoadingProps } from "./types";

export function Loading(props: LoadingProps) {
  return (
    <div className={`${props.className && props.className} p-1`}>
      <img src={gif} alt="loading gif" />
    </div>
  );
}
