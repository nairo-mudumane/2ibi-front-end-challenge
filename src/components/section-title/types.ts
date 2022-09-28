import { ReactNode } from "react";

export interface ISectionTitleProps {
  text: string | ReactNode;
  icon?: ReactNode;
  my?: number;
  size?: "small" | "medium" | "large";
}
