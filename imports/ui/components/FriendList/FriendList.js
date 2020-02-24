import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Card,
  Grid,
  ListSubheader,
  Divider,
  Typography
} from "@material-ui/core";
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
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.grid}
    >
      <Card className={classes.addcard}>
        <AddFriend />
      </Card>
      <Card className={classes.card}>
        <List
          subheader={
            <ListSubheader className={classes.header}>
              {friends.length} Friends
            </ListSubheader>
          }
          className={classes.list}
        >
          <Divider className={classes.divider} />
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
        </List>
      </Card>
    </Grid>
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
