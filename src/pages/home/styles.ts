import { makeStyles } from "@mui/styles";
import { GLOBAL_COLORS } from "../../global";

export const useStyles = makeStyles({
  root: {
    background: "red",
  },
  select: {
    "& li": {
      color: GLOBAL_COLORS.gray1,
    },
    "& li:hover": {
      backgroundColor: `${GLOBAL_COLORS.blue2}  !important`,
    },
    "& .Mui-selected": {
      backgroundColor: `${GLOBAL_COLORS.blue1} !important`,
      color: GLOBAL_COLORS.white1,
    },
    "& .Mui-selected:hover": {
      color: GLOBAL_COLORS.gray1,
    },
  },
});
