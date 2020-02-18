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
        image="../../../src/image/liri.png"
      />
    </div>
  );
};

export default withStyles(styles)(FullScreenLoader);
