import { createStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    card: {
      width: "500px",
      height: "300px",
      objectFit: "contain",
    },
    container: {
      width: "500px",
      margin: "5px"
    },
    title: {
      fontSize: "2rem"
    },
    mainContainer: {
      backgroundColor: "#272727",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "space-around",
      minHeight: "95vh"
    },
    text: {
      borderTop: "2px solid #4B4B4B"
    },
    header: {
      
      fontSize: "2.5rem"
    }
  });
export default styles;
