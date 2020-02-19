import React from "react";
import { Meteor } from "meteor/meteor";
import { Card, CardContent, Typography, withStyles } from "@material-ui/core";
import styles from "./styles";
import Gravatar from "react-gravatar";
import { withTracker } from "meteor/react-meteor-data";

const ProfileCard = props => {
  const { classes, data } = props;
  //console.log(Accounts)
  console.log(props);
  //console.log(Meteor.user())

  if (!data) return null;
  return (
    <div className={classes.container}>
      <Card>
        <Typography className={classes.title}>Profile</Typography>
        <div className={classes.innerContainer}>
        <Gravatar
          className={classes.avatar}
          email={data.emails[0].address || "fakeemail@gmail.com"}
        />
        <Typography className={classes.text}>
          {data.username}
        </Typography>
        </div>
      </Card>
    </div>
  );
};

// export default withStyles(styles)(ProfileCard);

export default withTracker(() => {
  Meteor.subscribe("users");
  // const data = Meteor.user();
  return {
    data: Meteor.user()
  };
})(withStyles(styles)(ProfileCard));
