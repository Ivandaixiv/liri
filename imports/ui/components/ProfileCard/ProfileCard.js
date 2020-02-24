import React from "react";
import { Meteor } from "meteor/meteor";
import { Card, Typography, withStyles } from "@material-ui/core";
import styles from "./styles";
import Gravatar from "react-gravatar";
import { withTracker } from "meteor/react-meteor-data";
import FireIcon from "@material-ui/icons/Whatshot";
import ClipboardIcon from "@material-ui/icons/Assignment";

const ProfileCard = props => {
  const { classes, data } = props;
  //console.log(Accounts)
  console.log(props);
  console.log(data);
  //console.log(Meteor.user())

  if (!data) return null;
  return (
    <div className={classes.container}>
      <Card>
        <Typography className={classes.title}>Profile</Typography>
        <div className={classes.innerContainer}>
          <div>
            <Gravatar
              className={classes.avatar}
              email={data.emails[0].address || "fakeemail@gmail.com"}
            />
          </div>
          <div className={classes.textContainer}>
            <Typography className={classes.text}>{data.username}</Typography>
          </div>
          <div>
            <Typography className={classes.emailText}>
              Email: {data.emails[0].address}
            </Typography>
            <Typography className={classes.emailText}>
              Tasks Completed: {data.tasksCompleted}
              <ClipboardIcon color="primary" />
            </Typography>
            <Typography className={classes.emailText}>
              Streak Count: {data.streak}
              <FireIcon className={classes.fire} />
            </Typography>
            

          </div>
        </div>
      </Card>
    </div>
  );
};

export default withTracker(() => {
  Meteor.subscribe("users");
  return {
    data: Meteor.user()
  };
})(withStyles(styles)(ProfileCard));
