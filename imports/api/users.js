import { Meteor } from "meteor/meteor";

export const Users = Meteor.users;

if (Meteor.isServer) {
  Meteor.publish("user", function userPublication() {
    return Users.find({ _id: this.userId });
  });
}

Meteor.methods({
  "user.newAccount"(userId) {
    Meteor.users.update(userId, { $set: { tasksCompleted: 0 } });
  },

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
