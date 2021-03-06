import React from "react";
import { Meteor } from "meteor/meteor";
import {
  Card,
  Typography,
  withStyles,
  Popover,
  Button,
  Box,
  Radio
} from "@material-ui/core";
import styles from "./styles";
import Gravatar from "react-gravatar";
import { withTracker } from "meteor/react-meteor-data";
import FireIcon from "@material-ui/icons/Whatshot";
import ClipboardIcon from "@material-ui/icons/Assignment";
import { Users } from "../../../api/users";
import { Pets } from "../../../api/pets";
import { render } from "react-dom";
import { Form, Field } from "react-final-form";

const ProfileCard = props => {
  const { classes, user, pets } = props;
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

  const onSubmit = values => {
    console.log("Values", values);
    Meteor.call("user.updateUsername", values.username);
    Meteor.call("pets.updatePet", pets[0], values.petname, values.species);
  };
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
                <Box className={classes.popUp}>
                  <h1>Account Details</h1>
                  <Form
                    onSubmit={onSubmit}
                    render={({
                      handleSubmit,
                      form,
                      submitting,
                      pristine,
                      values
                    }) => (
                      <form onSubmit={handleSubmit} className={classes.form}>
                        <div>
                          <Typography>Username</Typography>
                          <Field
                            name="username"
                            component="input"
                            type="text"
                            placeholder="Username"
                          />
                        </div>
                        <div>
                          <Typography>Your Liri's name</Typography>
                          <Field
                            name="petname"
                            component="input"
                            type="text"
                            placeholder="Liri's Name"
                          />
                        </div>
                        <div>
                          <Typography>Choose Your Liri</Typography>
                          <div>
                            <Typography>
                              <Field
                                name="species"
                                component="input"
                                type="radio"
                                value="white"
                              />{" "}
                              White
                            </Typography>
                            <Typography>
                              <Field
                                name="species"
                                component="input"
                                type="radio"
                                value="red"
                              />{" "}
                              Red
                            </Typography>
                            <Typography>
                              <Field
                                name="species"
                                component="input"
                                type="radio"
                                value="blue"
                              />{" "}
                              Blue
                            </Typography>
                            <Typography>
                              <Field
                                name="species"
                                component="input"
                                type="radio"
                                value="green"
                              />{" "}
                              Green
                            </Typography>
                          </div>
                        </div>
                        <div>
                          <Typography>Background Url</Typography>
                          <Field
                            name="backgroundUrl"
                            component="input"
                            type="text"
                            placeholder="Insert a image url"
                          />
                        </div>
                        <div>
                          <button
                            className={classes.button}
                            type="submit"
                            disabled={submitting || pristine}
                          >
                            Submit
                          </button>
                          <button
                            className={classes.button}
                            type="button"
                            onClick={form.reset}
                            disabled={submitting || pristine}
                          >
                            Reset
                          </button>
                        </div>
                      </form>
                    )}
                  />
                </Box>
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
  Meteor.subscribe("pets");
  return {
    user: Users.find({}).fetch(),
    pets: Pets.find({}).fetch()
  };
})(withStyles(styles)(ProfileCard));
