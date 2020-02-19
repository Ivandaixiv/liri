import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { withTracker } from "meteor/react-meteor-data";
import { Users } from "../../../api/users";
// import PropTypes from "prop-types";

const Stats = props => {
  const { classes, user } = props;
  console.log(props);
  return (
    <div className={classes.statsContainer}>
      <Typography variant="h3">{user && user.username}'s stats</Typography>
      <Typography>Account Age Placeholder</Typography>
      <div>
        <Typography>Completed Tasks:</Typography>
        <Typography>Stats 2 Placeholder</Typography>
      </div>
      <img src="/liri.png" className={classes.liri}></img>
    </div>
  );
};

export default withTracker(() => {
  return {
    user: Meteor.user()
  };
})(withStyles(styles)(Stats));
