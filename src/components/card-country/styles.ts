import styled from "styled-components";
import { IStylesProps } from "./types";

export const StyledCardCountry = styled.div<IStylesProps>`
  width: 100%;

  .flag {
    width: 100%;
    background-image: url(${(props) => props.flag});

    & > div {
      background: rgba(0, 0, 0, 0.5);
      width: 100%;
    }
  }
`;
