import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Gravatar from "react-gravatar";
import { withTracker } from "meteor/react-meteor-data";
import AddFriend from "./helpers/AddFriend";
import styles from "./styles";
import { Users } from "../../../api/users";

const FriendList = ({ currentUser }) => {
  const classes = styles();

  currentUser && console.log(currentUser.profile.friends);

  return (
    <List className={classes.list}>
      {/* {friends &&
        friends.map(friend => ( */}
      <ListItem button className={classes.item}>
        <Gravatar className={classes.media} email="blah@blah.com" />
        <ListItemText className={classes.text}>
          {currentUser && currentUser.username}
        </ListItemText>
      </ListItem>
      {/* ))} */}
      <AddFriend />
    </List>
  );
};

export default withTracker(() => {
  Meteor.subscribe("user");

  return {
    currentUser: Meteor.user()
  };
})(FriendList);
