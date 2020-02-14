//Location for dumy data - TEST DATA
import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { Tasks } from "../../api/tasks";
import { Pets } from "../../api/pets";
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

  if (Tasks.find().count() === 0) {
    Tasks.insert({
      title: "Create a new task",
      complete: false,
      creatorId: 1,
      dueDate: null,
      tags: "productivity"
    });
  }
});
