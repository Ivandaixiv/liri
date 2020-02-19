import { Meteor } from "meteor/meteor";

<<<<<<< HEAD
if (Meteor.isServer) {
  Meteor.publish("users", function usersPublication() {
    return Meteor.users.find(
      {},
      { fields: { profile: 1, username: 1, email: 1 } }
    );
  });
}
Meteor.methods({
  // "user.findFriend"() {
  //   if (Meteor.userId()) {
  //     const userIds = Meteor.user()?.profile?.friends;
  //     return userIds;
  //   }
  // },
=======
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
>>>>>>> id-statistics-page
  // Method to add friends
  "user.addFriend"(username) {
    if (!username) {
      throw new Meteor.Error(
        "user.addFriend.not-authorized",
        "Unable to add user to friends list."
      );
    }

    const newFriend = Meteor.users.findOne({ username });

    if (newFriend) {
      Meteor.users.update(Meteor.userId(), {
        $push: { "profile.friends": newFriend._id }
      });
    }
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
