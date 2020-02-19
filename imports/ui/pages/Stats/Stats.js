import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { withTracker } from "meteor/react-meteor-data";
import { Users } from "../../../api/users";
import moment from "moment";
// import PropTypes from "prop-types";

const Stats = props => {
  const { classes, user } = props;
  user.length > 0 && user[0].username && console.log(user[0]);

  return (
    user.length > 0 &&
    user[0] && (
      <div className={classes.statsContainer}>
        <Typography variant="h3">
          {user[0].username && user[0].username}'s stats
        </Typography>
        <Typography>
          Account Age:
          {user[0].createdAt && moment(user[0].createdAt).fromNow()}
        </Typography>
        <div>
          <div>
            <Typography>Completed Tasks</Typography>
            <Typography>
              {user[0].tasksCompleted && user[0].tasksCompleted}
            </Typography>
          </div>
          <div>
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
    user: Users.find({}).fetch()
  };
})(withStyles(styles)(Stats));
