import { createStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    card: {
      width: "500px",
      height: "300px",
      objectFit: "contain",
      borderTop: "2px solid #4B4B4B",
      paddingBottom: "10px",
      paddingTop: "10px"
    },
    container: {
      width: "500px",
      margin: "5px",
      
    },
    title: {
      fontSize: "2rem"
    },
    mainContainer: {
      backgroundColor: "#272727",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "space-around",
      minHeight: "91vh"
    },
    text: {
      borderTop: "2px solid #4B4B4B",
      paddingTop: "10px",
      paddingBottom: "10px"
    },
    header: {
      fontSize: "2.5rem"
    }
  });
export default styles;
