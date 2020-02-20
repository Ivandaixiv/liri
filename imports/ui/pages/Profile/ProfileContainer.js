import React, { Component } from "react";
import Profile from "./Profile";

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { classes } = this.props;
    return (
      <div>
        <Profile />
      </div>
    );
  }
}

export default ProfileContainer;
