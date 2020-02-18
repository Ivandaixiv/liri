import React from "react";
import { withStyles, CardMedia } from "@material-ui/core";
import styles from "./styles";

const FullScreenLoader = props => {
  const { classes } = props;
  return (
    <div>
      <CardMedia
        className={classes.card}
        component="img"
        image="https://cdn2.iconfinder.com/data/icons/fitness-and-sports/100/Fitnes-13-512.png"
      />
    </div>
  );
};

export default withStyles(styles)(FullScreenLoader);
