import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  header: {
    fontSize: "1.5rem"
  },
  addcard: {
    marginTop: "2rem",
    minWidth: "50vw",
    maxWidth: "50vw"
  },
  card: {
    padding: "1rem 1rem",
    minWidth: "40vw",
    maxWidth: "40vw",
    marginTop: "20px",
    overflow: "scroll",
    height: "80vh"
  },
  grid: {},
  box: {
    textAlign: "center"
  },
  divider: {
    marginBottom: "1rem"
  },
  input: {
    width: "17.4rem",
    marginTop: "1rem",
    marginBottom: "1rem"
  },
  media: {
    marginRight: "10px"
  },
  item: {
    marginBottom: "5px",
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"
  },
  list: {
    maxWidth: "600px",
    margin: "0 auto"
  },
  removebtn: {
    marginLeft: "10px"
  },
  addbtn: {},
  buttons: {
    marginBottom: "1.75rem"
  },
  alerts: {
    marginTop: "20px"
  }
});

export default useStyles;
