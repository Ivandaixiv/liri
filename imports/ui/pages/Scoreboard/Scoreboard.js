import React from "react";
import { Container, withStyles } from "@material-ui/core";
import { withTracker } from "meteor/react-meteor-data";
import ScoreboardList from "../../components/ScoreboardList";
import { Meteor } from "meteor/meteor";

const Scoreboard = ({ currentUser }) => {
  Meteor.call("user.findFriend");

  return (
    <Container maxWidth="lg" className="scoreboard-container">
      {/* <ScoreboardList user={currentUser} /> */}
    </Container>
  );
};

export default withTracker(() => {
  return {
    currentUser: Meteor.user()
  };
})(Scoreboard);
