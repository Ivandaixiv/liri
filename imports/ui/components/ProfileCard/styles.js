import { createStyles } from "@material-ui/styles";
const styles = () =>
  createStyles({
    container: {
      padding: "6px",
      backgroundColor: "#272727"
    },
    text: {
      fontSize: "2.5rem",
      display: "flex",
      alignItems: "center",
      marginLeft: "1rem"
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
      fontSize: "4rem",
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
      paddingRight: "1.5rem",
      borderRight: "2px solid #4B4B4B"
    },
    emailText: {
      display: "flex",
      alignItems: "center",
      marginLeft: "1rem",
      fontSize: "2rem"
      
    }
  });
export default styles;
