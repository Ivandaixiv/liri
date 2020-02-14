//Location for dumy data - TEST DATA
import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

Meteor.startup(() => {
  if (Meteor.users.find().count() === 0) {
    user = Accounts.createUser({
      email: "a@a.com",
      password: "a",
      profile: {
        friends: []
      }
    });
  }
});
