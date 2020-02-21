import { createStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    liri: {
      height: "100px",
      width: "50px",
      objectFit: "scale-down"
    },
    menuTitle: {
      margin: "0 0 0 15px"
    },
    link: {
      textDecoration: "none",
      color: "#212121"
    },
    icon: {
      marginRight: 10
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between"
    },
    title: {
      display: "flex",
      flexDirection: "row"
    },
    titleText: {
      color: "#FFFFFF",
      marginTop: "10px"
    },
    icons: {
      color: "#FFFFFF"
    }
  });

export default styles;
