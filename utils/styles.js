import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#ffffff",
      marginLeft: 10,
    },
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  main: {
    minHeight: "80vh",
  },
  grow: {
    flex: 1,
  },
  headericons: {
    padding: "0.5rem",
    marginRight: 10,
    cursor: "pointer",
  },
});
