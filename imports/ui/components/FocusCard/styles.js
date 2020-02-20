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
    finalSubmit: {
      backgroundColor: "white",
      display: "flex"
    },
    title: {
      fontSize: "2rem"
    },
    mainContainer: {
      textAlign: "center",
      alignItems: "center",
      justifyContent: "space-around",
    },
    text: {
      borderTop: "2px solid #4B4B4B"
    },
    header: {
      color: "white",
      fontSize: "2.5rem"
    }
  });
export default styles;
