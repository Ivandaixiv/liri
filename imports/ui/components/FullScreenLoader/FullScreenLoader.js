import React from "react";
import { withStyles, CardMedia, Typography, LinearProgress  } from "@material-ui/core";
import styles from "./styles";



const FullScreenLoader = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <CardMedia
        className={classes.liri}
        component="img"
        image="/liri.png"
      />
      <Typography variant="h3" className={classes.text}>Loading</Typography>
      <LinearProgress className={classes.loading} />
    </div>
  );
};

export default withStyles(styles)(FullScreenLoader);
