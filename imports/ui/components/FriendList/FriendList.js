import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Gravatar from "react-gravatar";
import { withTracker } from "meteor/react-meteor-data";
import AddFriend from "./helpers/AddFriend";
import styles from "./styles";
import { Meteor } from "meteor/meteor";
import { Users } from "../../../api/users";

const FriendList = ({ user, userId }) => {
  const classes = styles();
  user && console.log(user);

  return (
    <List className={classes.list}>
      {/* {friends &&
        friends.map(friend => ( */}
      <ListItem button className={classes.item}>
        <Gravatar className={classes.media} email="blah@blah.com" />
        <ListItemText className={classes.text}>
          {user && user.username}
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
    userId: Meteor.userId(),
    user: Users.find({}).fetch()
  };
})(FriendList);
