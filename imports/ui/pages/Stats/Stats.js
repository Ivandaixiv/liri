import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
// import AccountForm
// import PropTypes from "prop-types";

const Stats = props => {
  const { classes } = props;
  return (
    <div className={classes.statsContainer}>
      <Typography variant="h3">Your Stats</Typography>
      <Typography>Account Age Placeholder</Typography>
      <div>
        <Typography>Stats 1 Placeholder</Typography>
        <Typography>Stats 2 Placeholder</Typography>
      </div>
      <img src="/liri.png" className={classes.liri}></img>
    </div>
  );
};

export default withStyles(styles)(Stats);
