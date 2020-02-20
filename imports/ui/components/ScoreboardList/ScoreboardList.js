import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { List, ListItem, ListDivider } from "@material-ui/core";
import Gravatar from "react-gravatar";
// import styles from "./styles";

class Scoreboard extends Component {
  render() {
    return (
      <div>
        this is the Scoreboard
        {/* <List>
          {this.props.user.map(user => {
            console.log(user);
            return (
              <div className={classes.listItem}>
                <Gravatar email={user.email} />
                <ListItem
                  key={user._id}
                  primaryText={user.name}
                  onClick={this.selectFriend.bind(this, user._id)}
                  secondaryText={"Current streak: " + user.streak}
                  style={style}
                />
                <ListDivider />
              </div>
            );
          })}
        </List> */}
      </div>
    );
  }
}

// Scoreboard.propTypes = {
//   selectedUserId: React.PropTypes.string,
//   users: React.PropTypes.array
//   // onPlayerSelected: React.PropTypes.func
// };

export default withRouter(Scoreboard);
