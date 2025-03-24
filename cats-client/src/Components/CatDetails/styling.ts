import { createUseStyles } from "react-jss";

export const catDetailsStyling = createUseStyles({
  wrapper: {
    display: "flex",
    position: "static",
    flexDirection: "column",
    maxHeight: "50svh",
    maxWidth: "25em",
    paddingBottom: "0.5em",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: "1.5em",
    overflow: "hidden",
    backgroundColor: "#F8F6F4",
  },
  image: {
    height: "10em",
    objectFit: "cover",
  },
  details: {
    display: "flex",
    marginTop: "1em",
    flexDirection: "column",
    fontFamily: "sans-serif",
    marginLeft: "1.5em",
  },
  title: {
    fontSize: "1.3em",
  },
  description: {
    color: "#3C3D37",
    maxHeight: "5em",
    overflowY: "scroll",
    scrollbarColor: "#3C3D37 #F8F6F4",
    paddingBottom: "5%",
    marginTop: "3%",
    fontSize: "1em",
    marginRight: "10%",
    borderBottom: "solid 1px #3C3D37",
  },
  miceTitle: {
    fontSize: "1.2em",
    marginTop: "1em",
  },
  miceList: {
    display: "flex",
    flexDirection: "column",
    marginTop: "3%",
    maxHeight: "5em",
    marginRight: "10%",
    overflowY: "scroll",
    scrollbarColor: "#3C3D37 #F8F6F4",
  },
  mouse: {
    marginLeft: "5%",
    fontSize: "0.9em",
  },
});
