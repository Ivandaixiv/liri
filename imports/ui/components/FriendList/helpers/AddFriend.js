import React, { useState } from "react";
import { Container, Box, Button, Fade } from "@material-ui/core";
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
    <Container maxWidth="lg" className={classes.container}>
      <Box className={classes.box}>
        <div className={classes.inputdiv}>
          <input
            className={classes.input}
            type="text"
            value={usernameInput}
            onChange={event => setUsernameInput(event.target.value)}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
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
        <Fade in={isAlert}>
          <Box className={classes.alerts}>
            <ShowAlert severity="success">Success!</ShowAlert>
          </Box>
        </Fade>
      </Box>
    </Container>
  );
};

export default withTracker(() => {
  return {
    currentUser: Meteor.user()
  };
})(AddFriend);
