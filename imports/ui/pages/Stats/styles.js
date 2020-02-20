import { createStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    statsContainer: {
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100vh",
      textAlign: "center",
      background: "white"
    },
    counterContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center"
    },
    counter: {
      margin: 40
    },
    liri: {
      width: "300px"
    }
  });

export default styles;
