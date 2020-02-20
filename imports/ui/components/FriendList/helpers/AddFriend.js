import React, { useState } from "react";
import { Container, withStyles, Box, Button } from "@material-ui/core";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import styles from "../styles";

const AddFriend = () => {
  const classes = styles();
  const [usernameInput, setUsernameInput] = useState("");

  return (
    <Container maxWidth="lg" className="scoreboard-container">
      <p className={classes.text}>{usernameInput}</p>
      <input
        type="text"
        value={usernameInput}
        onChange={event => setUsernameInput(event.target.value)}
      />
      <Box className={classes.buttonbox}>
        <Button
          className={classes.button}
          onClick={() => Meteor.call("user.addFriend", usernameInput)}
        >
          Add Friend
        </Button>
      </Box>
    </Container>
  );
};

export default withTracker(() => {
  return {
    currentUser: Meteor.user()
  };
})(AddFriend);
