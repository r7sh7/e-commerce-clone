import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#ffffff",
      marginLeft: 10,
    },
    main: {
      minHeight: "80vh",
    },
  },
});
