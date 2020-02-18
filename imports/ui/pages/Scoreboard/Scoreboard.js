import React from "react";
import { Container, withStyles } from "@material-ui/core";
import { withTracker } from "meteor/react-meteor-data";
// import styles from "./styles";
import ScoreboardList from "../../components/ScoreboardList";
// import PropTypes from "prop-types"
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
