import { createStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    card: {
      display: "flex",
      paddingTop: "20px",
      width: "80vw",
      height: "10vw"
    },
    pad: {
      padding: "20"
    },
    split: {
      display: "flex",
      justifyContent: "space-between"
    },
    gravatar: {
      borderRadius: "50%"
    }
  });

export default styles;
