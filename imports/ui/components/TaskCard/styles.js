import { createStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    card: {
      display: "flex",
      paddingTop: "20px",
      width: "88.5vw",
      height: "15vw"
    },
    pad: {
      padding: "20"
    },
    buttonSplit: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr"
    },
    gravatar: {
      borderRadius: "50%"
    }
  });

export default styles;
