import { Meteor } from "meteor/meteor";

Meteor.methods({
  "user.findFriend"() {
    if (Meteor.userId()) {
      const userIds = Meteor.users
        .find({})
        .fetch()
        .map(user => user.friends);
      return userIds;
    }
  },
  // Method to add friends
  "user.addFriend"(friendUserId) {
    if (!friendUserId) {
      throw new Meteor.Error(
        "user.addFriend.not-authorized",
        "Unable to add user to friends list."
      );
    }

    Meteor.users.update(Meteor.userId(), {
      profile: { $push: { friends: friendUserId } }
    });
  },
  // Method to remove friends
  "user.removeFriend"(friendUserId) {
    if (!friendUserId) {
      throw new Meteor.Error(
        "users.removeFriend.not-authorized",
        "Unable to remove user"
      );
    }

    Meteor.users.update(Meteor.userId(), {
      profile: {
        $pull: {
          friends: { $in: [friendUserId] }
        }
      }
    });
  }
});
