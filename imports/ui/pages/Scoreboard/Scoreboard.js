import React, { useState } from "react";
import { Container, withStyles, Box, Button } from "@material-ui/core";
import { withTracker } from "meteor/react-meteor-data";
import ScoreboardList from "../../components/ScoreboardList";
import { Meteor } from "meteor/meteor";

const Scoreboard = ({ currentUser }) => {
  const [usernameInput, setUsernameInput] = useState("");

  return (
    <Container maxWidth="lg" className="scoreboard-container">
      {usernameInput}
      <input
        type="text"
        value={usernameInput}
        onChange={e => setUsernameInput(e.target.value)}
      />
      <ScoreboardList user={currentUser} />
      <Box>
        <Button onClick={() => Meteor.call("user.addFriend", usernameInput)}>
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
})(Scoreboard);
