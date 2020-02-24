import { createStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    card: {
      display: "grid",
      width: "325px",
      height: "150px",
      overflow: "auto",
      margin: "10px 0 0 10px"
    },
    cardContent: {
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      transition: "0.3s"
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
