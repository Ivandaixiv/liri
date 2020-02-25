import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Card,
  Grid,
  ListSubheader,
  Divider
} from "@material-ui/core";
import Gravatar from "react-gravatar";
import { withTracker } from "meteor/react-meteor-data";
import AddFriend from "./helpers/AddFriend";
import styles from "./styles";
import { Users } from "../../../api/users";
import Box from "@material-ui/core/Box";
import Scoreboard from "../../components/Scoreboard";

const FriendList = props => {
  const classes = styles();
  const { friends, allUsers, commonFriends } = props;
  console.log(commonFriends);
  return (
    <Grid container item xs="auto" justify="center" className={classes.grid}>
      <Card className={classes.card}>
        <List
          subheader={
            <ListSubheader className={classes.header}>
              You Have {friends.length} Friends
            </ListSubheader>
          }
          className={classes.list}
        >
          <Divider className={classes.divider} />
          {friends &&
            friends.map(friend => (
              <ListItem className={classes.item} button key={friend._id}>
                <Gravatar
                  className={classes.media}
                  email={friend.emails[0].address}
                />
                <ListItemText className={classes.text}>
                  {friend.username}
                </ListItemText>
              </ListItem>
            ))}
          <Box>
            <AddFriend />
          </Box>
        </List>
      </Card>
      <Card className={classes.card}>
        <List
          subheader={
            <ListSubheader className={classes.header}>
              {allUsers.length} Available Users
            </ListSubheader>
          }
          className={classes.list}
        >
          <Divider className={classes.divider} />
          {allUsers &&
            allUsers.map(user => (
              <ListItem className={classes.item} button key={user._id}>
                <Gravatar
                  className={classes.media}
                  email={user.emails[0].address}
                />
                <ListItemText className={classes.text}>
                  {user.username}
                </ListItemText>
              </ListItem>
            ))}
        </List>
      </Card>
    </Grid>
  );
};

export default withTracker(() => {
  Meteor.subscribe("users");
  Meteor.subscribe("friends");
  Meteor.subscribe("allUsers");

  const friends = Users.find({
    "profile.friends": { $in: [Meteor.userId()] }
  }).fetch();

  const allUsers = Users.find({}).fetch();

  const commonFriends = friends.map(({ _id }) =>
    allUsers.filter(user => user._id === _id)
  );

  return {
    friends,
    allUsers,
    commonFriends
  };
})(FriendList);
