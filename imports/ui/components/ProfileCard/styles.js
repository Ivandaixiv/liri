import { createStyles } from "@material-ui/styles";
const styles = () =>
  createStyles({
    container: {
        padding: "6px",
        backgroundColor: "slategrey"
    },
    text: {
      fontSize: "2rem",
      display: "flex",
      alignItems: "center",
      marginLeft: "1rem"
    },
    avatar: {
        height: "100px",
        width: "100px",
        borderRadius: "55%",
    },
    root: {
        padding: "1rem"
    },
    title: {
        fontSize: "4rem",
        marginLeft: "10px",

    },
    innerContainer: {
            display: "inline-flex",
            marginLeft: "10px"
    }
  });
export default styles;
