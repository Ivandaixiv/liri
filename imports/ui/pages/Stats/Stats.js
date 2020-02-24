import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { withTracker } from "meteor/react-meteor-data";
import { Users } from "../../../api/users";
import moment from "moment";
import { Meteor } from "meteor/meteor";
import { Pets } from "../../../api/pets";
import Box from "@material-ui/core/Box";
import FireIcon from "@material-ui/icons/Whatshot";
import ClipboardIcon from "@material-ui/icons/Assignment";
import { ExpLinearProgress } from "./styles";
import { HPLinearProgress } from "./styles";
// import PropTypes from "prop-types";

const Stats = props => {
  const { classes, user, pets } = props;
  console.log("Props", props);

  user.length > 0 && user[0].username && console.log("User", user[0]);
  return (
    user.length > 0 &&
    user[0] && (
      <Box className={classes.statsContainer}>
        <Box className={classes.statsBox}>
          <Typography variant="h4">
            {user[0].username && user[0].username}'s stats
          </Typography>
          <Typography className={classes.name}>
            {pets[0] && pets[0].name} is{" "}
            {user[0].createdAt && moment(user[0].createdAt).fromNow(true)} old!
          </Typography>
          <div className={classes.counterContainer}>
            <div className={(classes.counter, classes.tasks)}>
              <Typography>Completed Tasks</Typography>
              <div className={classes.data}>
                <ClipboardIcon color="primary" />
                <Typography>
                  {user[0].tasksCompleted && user[0].tasksCompleted}
                </Typography>
              </div>
            </div>
            <div className={classes.counter}>
              <Typography>Streak Count</Typography>
              <div className={classes.data}>
                <FireIcon className={classes.fire} />
                <Typography>{user[0].streak && user[0].streak}</Typography>
              </div>
            </div>
          </div>
          {pets[0] && (
            <Box>
              <Box display="flex" className={classes.petStats}>
                <Typography> Health: {pets[0].hp}/100</Typography>
                <Typography> Deaths: {pets[0].deathCounter}</Typography>
              </Box>
              <HPLinearProgress
                variant="determinate"
                value={pets[0].hp}
                className={classes.bar}
              />
            </Box>
          )}
          {pets[0] && (
            <Box>
              <Box display="flex" className={classes.petStats}>
                <Typography>Level: {pets[0] && pets[0].level}</Typography>
                <Typography> Experience: {pets[0].exp}/100</Typography>
              </Box>

              <ExpLinearProgress
                variant="determinate"
                value={pets[0].exp}
                className={classes.bar}
              />
            </Box>
          )}
        </Box>
        <img src="/liri.png" className={classes.liri}></img>
      </Box>
    )
  );
};

export default withTracker(() => {
  Meteor.subscribe("user");
  Meteor.subscribe("pets");

  return {
    userId: Meteor.userId(),
    pets: Pets.find({}).fetch(),
    user: Users.find({}).fetch()
  };
})(withStyles(styles)(Stats));
