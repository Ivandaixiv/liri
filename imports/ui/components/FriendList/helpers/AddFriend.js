import React, { useState } from "react";
import { Grid, Box, Button, Fade } from "@material-ui/core";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import Alert from "@material-ui/lab/Alert";
import styles from "../styles";

const ShowAlert = props => (
  <Alert severity={props.severity}>{props.children}</Alert>
);

const AddFriend = () => {
  const classes = styles();
  const [usernameInput, setUsernameInput] = useState("");
  const [isAlert, setisAlert] = useState(false);

  handleAddBtnClick = () => {
    Meteor.call("user.addFriend", usernameInput);
    setisAlert(true);
    setTimeout(() => {
      setisAlert(false);
    }, 2000);
  };

  handleRemoveBtnClick = () => {
    Meteor.call("user.removeFriend", usernameInput);
    setisAlert(true);
    setTimeout(() => {
      setisAlert(false);
    }, 2000);
  };

  return (
    <Grid className={classes.grid}>
      <Fade in={isAlert}>
        <Box className={classes.alerts}>
          <ShowAlert className={classes.alert} severity="success">
            Success!
          </ShowAlert>
        </Box>
      </Fade>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.inputbox}
      >
        <input
          className={classes.input}
          placeholder="Enter username"
          type="text"
          value={usernameInput}
          onChange={event => setUsernameInput(event.target.value)}
        />
        <Box className={classes.buttons}>
          <Button
            variant="contained"
            color="primary"
            className={classes.addbtn}
            onClick={handleAddBtnClick}
          >
            Add Friend
          </Button>
          <Button
            variant="contained"
            className={classes.removebtn}
            onClick={handleRemoveBtnClick}
          >
            Remove Friend
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default withTracker(() => {
  return {
    currentUser: Meteor.user()
  };
})(AddFriend);
