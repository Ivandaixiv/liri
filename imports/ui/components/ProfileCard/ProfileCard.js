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

const ProfileCard = props => {
  const { classes, data } = props;
  //console.log(Accounts)
  console.log(props);
  console.log(data);
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

  return (
    <div className={classes.container}>
      <Card>
        <Typography className={classes.title}>Profile</Typography>
        <div className={classes.innerContainer}>
          <div>
            <Gravatar
              className={classes.avatar}
              email={data.emails[0] && data.emails[0].address}
            />
          </div>
          <div className={classes.textContainer}>
            <Typography className={classes.text}>{data.username}</Typography>
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
              Email: {data.emails[0].address}
            </Typography>
            <Typography className={classes.emailText}>
              Tasks Completed:
              <ClipboardIcon color="primary" /> {data.tasksCompleted}
            </Typography>
            <Typography className={classes.emailText}>
              Streak Count: <FireIcon className={classes.fire} />
              {data.streak}
            </Typography>
            <Typography className={classes.emailText}>
              Total Experience: {data.exp}
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
