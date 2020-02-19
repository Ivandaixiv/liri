import React, { Component } from "react";
import Scoreboard from "./Scoreboard";
import FriendList from "../../components/FriendList/FriendList";

class ScoreboardContainer extends Component {
  render() {
    return (
      <div className="scoreboard-container">
        <FriendList />
      </div>
    );
  }
}
export default ScoreboardContainer;
