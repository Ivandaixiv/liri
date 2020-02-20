import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { withTracker } from "meteor/react-meteor-data";
import { Users } from "../../../api/users";
import moment from "moment";
import { Meteor } from "meteor/meteor";
// import PropTypes from "prop-types";

const Stats = props => {
  const { classes, user } = props;
  user.length > 0 && user[0].username && console.log(user[0]);

  return (
    user.length > 0 &&
    user[0] && (
      <div className={classes.statsContainer}>
        <Typography variant="h4">
          {user[0].username && user[0].username}'s stats
        </Typography>
        <Typography>
          Account Age:{" "}
          {user[0].createdAt && moment(user[0].createdAt).fromNow()}
        </Typography>
        <div className={classes.counterContainer}>
          <div className={classes.counter}>
            <Typography>Completed Tasks</Typography>
            <Typography>
              {user[0].tasksCompleted && user[0].tasksCompleted}
            </Typography>
          </div>
          <div className={classes.counter}>
            <Typography>Streak Count</Typography>
            <Typography>{user[0].streak && user[0].streak}</Typography>
          </div>
        </div>
        <img src="/liri.png" className={classes.liri}></img>
      </div>
    )
  );
};

export default withTracker(() => {
  Meteor.subscribe("user");

  return {
    userId: Meteor.userId(),
    user: Users.find({}).fetch()
  };
})(withStyles(styles)(Stats));
