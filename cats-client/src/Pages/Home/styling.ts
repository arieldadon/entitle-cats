import { createUseStyles } from "react-jss";

export const homePageStyles = createUseStyles({
  page: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100svh",
  },
  searchField: {
    maxWidth: "500px",
    marginTop: "1em",
    marginLeft: "1em",
    marginRight: "1em",
  },
  catListWrapper: {
    display: "flex",
    paddingLeft: "5%",
  },
  catList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(15em, 1fr))",
    justifyContent: "center",
    marginTop: "3em",
    marginBottom: "5%",
    gap: "1.5em",
    maxWidth: "95%",
  },
  addButton: {
    position: "fixed",
    bottom: "7svh",
    right: "5vw",
    borderRadius: "100%",
    color: "#C5EBAA",
    width: "5em",
    height: "5em",
    cursor: "pointer",
    "&:hover": {
      color: "#A5DD9B",
    },
  },
});
