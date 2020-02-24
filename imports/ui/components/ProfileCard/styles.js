import { createStyles } from "@material-ui/styles";
const styles = () =>
  createStyles({
    container: {
      padding: "6px",
      backgroundColor: "#272727"
    },
    text: {
      fontSize: "2rem",
      display: "flex",
      alignItems: "center",
      marginTop: "1rem"
    },
    avatar: {
      height: "150px",
      width: "150px",
      borderRadius: "55%"
    },
    root: {
      padding: "1rem"
    },
    title: {
      fontSize: "2.5rem",
      marginLeft: "10px",
      borderBottom: "2px solid #4B4B4B",
      marginRight: "10px"
    },
    innerContainer: {
      display: "inline-flex",
      marginLeft: "10px",
      marginTop: "1rem",
      marginBottom: "1rem"
    },
    textContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minWidth: 300,
      borderRight: "2px solid #4B4B4B"
    },
    emailText: {
      display: "flex",
      alignItems: "center",
      marginLeft: "1rem",
      fontSize: "1.3rem",
      marginTop: ".5rem"
    },
    fire: {
      color: "#FF652F"
    }
  });
export default styles;
