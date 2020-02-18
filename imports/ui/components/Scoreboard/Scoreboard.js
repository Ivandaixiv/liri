import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { List, ListItem, ListDivider } from "@material-ui/core";
import Gravatar from "react-gravatar";
import styles from "./styles";

class Scoreboard extends Component {
  selectFriend(FriendUserId) {
    this.props.onFriendSelected(FriendUserId);
  }

  render() {
    return (
      <List>
        {this.props.users.map(user => {
          return (
            <div className={classes.ListItem}>
              <Gravatar email={user.email} />
              <ListItem
                key={user._id}
                primaryText={user.name}
                onClick={this.selectFriend.bind(this, user._id)}
                secondaryText={"Current score: " + user.streak}
                style={style}
              />
              <ListDivider />
            </div>
          );
        })}
      </List>
    );
  }
}

Scoreboard.propTypes = {
  //   selectedUserId: React.PropTypes.string,
  //   users: React.PropTypes.array
  // onPlayerSelected: React.PropTypes.func
};

export default withRouter(Scoreboard);
