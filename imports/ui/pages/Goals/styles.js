import { createStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    card: {
      display: "flex",
      width: "100vw",
      margin: "auto",
      paddingLeft: "20px",
      alignItems: "flex-start",
      flexDirection: "column",
      justifyContent: "space-evenly",
      minHeight: 150,
      paddingBottom: "10px",
      backgroundColor: "#46bf8f"
      // opacity: "0.95"
    },
    cardContent: {},
    title: {
      paddingTop: "40px",
      paddingLeft: "60px",
      paddingBottom: "5px"
    },
    username: {
      display: "flex",
      alignItems: "center",
      paddingBottom: "10px"
    },
    gridSpace: {
      paddingTop: "20px"
    },
    bold: { fontWeight: 900, fontSize: "30px" },
    quickStart: {
      marginLeft: "15px"
    }

  });

export default styles;
