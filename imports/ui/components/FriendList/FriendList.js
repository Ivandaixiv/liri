import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Gravatar from "react-gravatar";
import { withTracker } from "meteor/react-meteor-data";
import AddFriend from "./helpers/AddFriend";
import styles from "./styles";
import { Users } from "../../../api/users";

const FriendList = props => {
  const classes = styles();
  const { friends } = props;

  console.log("friends", friends);

  return (
    <List>
      {friends &&
        friends.map(friend => (
          // <div key={friend._id}>{friend.username}</div>
          <ListItem button>
            <Gravatar
              className={classes.media}
              email={friend.emails[0].address}
            />
            <ListItemText>{friend.username}</ListItemText>
          </ListItem>
        ))}
      <AddFriend />
    </List>
  );
};

export default withTracker(() => {
  Meteor.subscribe("user");
  Meteor.subscribe("friends");
  const currentUser = Meteor.user();
  console.log("this.userId", Meteor.userId());
  const friends = Users.find({
    "profile.friends": { $in: [Meteor.userId()] }
  }).fetch();
  return {
    friends
  };
})(FriendList);
