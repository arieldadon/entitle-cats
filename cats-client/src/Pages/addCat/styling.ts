import { createUseStyles } from "react-jss";

export const addCatStyling = createUseStyles({
  titleWrapper: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1em",
    gap: "1em",
  },
  title: {
    fontFamily: "sans-serif",
    fontSize: "2.3em",
  },
  backButton: {
    fontSize: '2em',
    marginLeft: '1em',
    color: 'grey'
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5svh",
    marginBottom: "5svh",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    maxWidth: "50em",
    gap: "20px",
  },
  nameWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: "1.5em",
  },
  nameField: {
    width: "100%",
  },

  submitButton: {
    marginTop: "1em",
    width: "100%",
    height: "4.5em",
    color: "white",
    backgroundColor: "#C1D8C3",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#A5DD9B",
    },
    "& span": {
      fontSize: "2em",
    },
  },
});
