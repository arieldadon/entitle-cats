import { createUseStyles } from "react-jss";

export const textFieldStyling = createUseStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
  },
  hint: {
    paddingBottom: "0.5em",
    marginLeft: "0.5em",
    fontFamily: "sans-serif",
    opacity: "0.8",
  },
  error: {
    paddingBottom: "0.5em",
    marginLeft: "0.5em",
    fontFamily: "sans-serif",
    opacity: "0.8",
    color: "red",
  },
  textField: {
    height: "2em",
    paddingLeft: "1em",
    paddingRight: "1em",
    borderRadius: "20px",
    fontSize: "1.5em",
    borderWidth: "1px",
    "&::placeholder": {
      color: "grey",
      opacity: "0.7",
      fontSize: "1em",
    },
  },
});
