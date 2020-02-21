import { createStyles } from "@material-ui/core";

const styles = ({}) =>
  createStyles({
    paper: {
      marginTop: "25vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: "sans-serif",
      textAlign: "center"
    },
    avatar: {
      margin: "5px",
      backgroundColor: "#D92121"
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: "5px"
    },
    buttons: {
      display: "flex",
      justifyContent: "space-between",
      width: "370px"
    }
  });

export default styles;
