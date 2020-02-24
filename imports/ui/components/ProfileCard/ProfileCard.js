import React from "react";
import { Meteor } from "meteor/meteor";
import {
  Card,
  Typography,
  withStyles,
  Popover,
  Button
} from "@material-ui/core";
import styles from "./styles";
import Gravatar from "react-gravatar";
import { withTracker } from "meteor/react-meteor-data";
import FireIcon from "@material-ui/icons/Whatshot";
import ClipboardIcon from "@material-ui/icons/Assignment";
import { Users } from "../../../api/users";

const ProfileCard = props => {
  const { classes, user } = props;
  //console.log(Accounts)
  console.log(props);
  console.log("User", user);
  //console.log(Meteor.user())
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return user[0] ? (
    <div className={classes.container}>
      <Card>
        <Typography className={classes.title}>Profile</Typography>
        <div className={classes.innerContainer}>
          <div>
            <Gravatar
              className={classes.avatar}
              email={user[0].emails[0].address}
            />
          </div>
          <div className={classes.textContainer}>
            <Typography className={classes.text}>
              {(user[0].username && user[0].username) || "Your Name"}
            </Typography>
            <div>
              <Button
                aria-describedby={id}
                variant="contained"
                color="primary"
                onClick={handleClick}
              >
                Edit Profile
              </Button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center"
                }}
              >
                <Typography className={classes.typography}>
                  The content of the Popover.
                </Typography>
              </Popover>
            </div>
          </div>

          <div>
            <Typography className={classes.emailText}>
              Email: {user[0].emails[0].address}
            </Typography>
            <Typography className={classes.emailText}>
              Tasks Completed:
              <ClipboardIcon color="primary" /> {user[0].tasksCompleted}
            </Typography>
            <Typography className={classes.emailText}>
              Streak Count: <FireIcon className={classes.fire} />
              {user[0].streak}
            </Typography>
            <Typography className={classes.emailText}>
              Total Experience: {user[0].exp}
            </Typography>
          </div>
        </div>
      </Card>
    </div>
  ) : null;
};

export default withTracker(() => {
  Meteor.subscribe("user");
  return {
    user: Users.find({}).fetch()
  };
})(withStyles(styles)(ProfileCard));
