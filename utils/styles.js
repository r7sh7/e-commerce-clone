import { makeStyles } from "@mui/styles";

const LINES_TO_SHOW = 2;

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
    maxHeight: "90vh",
    paddingTop: 20,
  },
  grow: {
    flex: 1,
  },
  headerIcons: {
    padding: "0.5rem",
    marginRight: 10,
    color: "white",
    cursor: "pointer",
  },
  multiLineEllipsis: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": LINES_TO_SHOW,
    "-webkit-box-orient": "vertical",
  },
  footer: {
    display: "flex",
    margin: "1.5rem 0",
    padding: "1.5rem 0",
    justifyContent: "center",
  },
});
