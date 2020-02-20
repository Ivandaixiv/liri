import { createStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const styles = () =>
  createStyles({
    statsContainer: {
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      minHeight: "90vh",
      textAlign: "center",
      alignItems: "center",
      background: "#272727"
    },
    statsBox: {
      marginTop: 10,
      width: "70vw",
      background: "white",
      padding: "50px 10px",
      borderRadius: 10,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    name: {
      maxWidth: "500px",
      padding: "20px 0",
      borderBottom: "2px solid #4B4B4B"
    },
    tasks: {
      padding: "0 20px",
      marginTop: "40px",
      borderRight: "2px solid #4B4B4B"
    },
    fire: {
      color: "#FF652F"
    },
    data: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "row"
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
      width: "15%",
      height: "30%"
    },
    expBar: {
      width: "350px"
    },
    petStats: {
      justifyContent: "space-between"
    }
  });
export const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: "#14A76C"
  },
  barColorPrimary: {
    backgroundColor: "#FFDF00"
  }
})(LinearProgress);

export default styles;
