import { createStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    card: {
      display: "grid",
      width: "340px",
      height: "150px",
      overflow: "auto",
      margin: "15px 0 0 15px",
      transition: "0.3s",
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
      }
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
