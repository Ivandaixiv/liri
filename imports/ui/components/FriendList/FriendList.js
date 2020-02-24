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

  console.log(friends);

  return (
    <List className={classes.list}>
      {friends &&
        friends.map(friend => (
          <ListItem className={classes.item} button>
            <Gravatar
              className={classes.media}
              email={friend.emails[0].address}
            />
            <ListItemText className={classes.text}>
              {friend.username}
            </ListItemText>
          </ListItem>
        ))}
      <AddFriend />
    </List>
  );
};

export default withTracker(() => {
  Meteor.subscribe("user");
  Meteor.subscribe("friends");

  const friends = Users.find({
    "profile.friends": { $in: [Meteor.userId()] }
  }).fetch();
  return {
    friends
  };
})(FriendList);
