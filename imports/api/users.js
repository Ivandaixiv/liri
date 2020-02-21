import { Meteor } from "meteor/meteor";

export const Users = Meteor.users;

if (Meteor.isServer) {
  Meteor.publish("user", function userPublication() {
    return Users.find({ _id: this.userId });
  });
  Meteor.publish("friends", function friendPublication() {
    console.log("this.userid is", this.userId);
    return Users.find(
      { "profile.friends": { $in: [this.userId] } },
      { fields: { username: 1, profile: 1, emails: 1, createdAt: 1 } }
    );
  });
}

Meteor.methods({
  "user.newAccount"(userId) {
    Meteor.users.update(userId, {
      $set: { tasksCompleted: 0, focuses: [], streak: 1, exp: 1 }
    });
  },
  "user.updateFocus"(userId, focuses) {
    Meteor.users.update(userId, {
      $set: { focuses: focuses }
    });
  },

  "friend.friends"() {
    console.log("find users with friends containing", Meteor.userId());
    const response = Users.find({
      "profile.friends": { $in: [Meteor.userId()] }
    }).fetch();
    console.log("server response", response);
    return response;
  },

  // Method to add friends
  "user.addFriend"(username) {
    if (!username) {
      throw new Meteor.Error(
        "user.addFriend.not-authorized",
        "Unable to add user to friends list."
      );
    }

    const newFriend = Meteor.users.findOne({ username });

    if (newFriend && newFriend._id !== Meteor.userId()) {
      Meteor.users.update(Meteor.userId(), {
        $push: { "profile.friends": newFriend._id }
      });

      Meteor.users.update(newFriend._id, {
        $push: { "profile.friends": Meteor.userId() }
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
