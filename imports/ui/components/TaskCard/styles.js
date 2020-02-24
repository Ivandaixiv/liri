import { createStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    card: {
      paddingTop: "20px",
      width: "20vw",
      height: "8vw",
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      transition: "0.3s",
      "&hover": { boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)" }
    },
    cardContent: {
      // display: "flex"
    },
    pad: {
      padding: "20"
    },
    split: {
      display: "flex",
      justifyContent: "space-between"
    },
    userInfo: {
      display: "flex",
      justifyContent: "center",
      fontWeight: "bold"
    }
  });

export default styles;
