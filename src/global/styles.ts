import { createGlobalStyle } from "styled-components";
import { GLOBAL_COLORS } from "./colors";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}


a {
  width: fit-content;
}

a.link {
  width: fit-content;
  position: relative;
}

a.link {
  &::after {
    content: '';
    background-color: transparent;

    width: 100%;
    height: 1px;
    position: absolute;
    left: 0;
    bottom: -6px;
  }
}

a.link {
  &:hover {
    color: ${GLOBAL_COLORS.blue1};
  }
}

a.link {
  &:hover {
    &::after {
      background-color: ${GLOBAL_COLORS.blue1};
    }
  }
}

a.link.active {
  color: ${GLOBAL_COLORS.blue1};

  &::after {
    background-color: ${GLOBAL_COLORS.blue1};
  }
}
`;
