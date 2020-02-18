import { createStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    card: {
      width: 600,
      height: 200
    },
    media: {
      height: 200
    },
    pad: {
      padding: "20"
    },
    tagGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr"
    },
    userInfo: {
      display: "flex",
      paddingBottom: "15px"
    },
    flex: {
      display: "flex",
      flexDirection: "column",
      paddingLeft: 10
    },
    link: {
      color: "black"
    },
    gravatar: {
      borderRadius: "50%"
    }
  });

export default styles;
