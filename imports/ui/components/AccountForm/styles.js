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
    submit: {
      // margin: "(3px, 0px, 2px)"
    }
  });

export default styles;
