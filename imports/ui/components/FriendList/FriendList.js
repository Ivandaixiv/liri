import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Gravatar from "react-gravatar";
import { withTracker } from "meteor/react-meteor-data";
import AddFriend from "./helpers/AddFriend";
import styles from "./styles";

const FriendList = ({ currentUser }) => {
  const classes = styles();
  // const screenName = Meteor.user().username;
  return (
    <List className={classes.list}>
      {console.log(currentUser)}
      {/* {friends &&
        friends.map(friend => ( */}
      <ListItem button className={classes.item}>
        <Gravatar className={classes.media} email="blah@blah.com" />
        <ListItemText className={classes.text}>Username</ListItemText>
      </ListItem>
      {/* ))} */}
      <AddFriend />
    </List>
  );
};

export default withTracker(() => {
  return {
    currentUser: Meteor.user()
  };
})(FriendList);
