//Location for dumy data - TEST DATA
import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { Tasks } from "../../api/tasks";
import { Pets } from "../../api/pets";

Meteor.startup(() => {
  if (Meteor.users.find().count() === 0) {
    user = Accounts.createUser({
      username: "user1",
      email: "a@a.com",
      password: "a",
      mainFocus: "Fitness",
      streak: 1,
      exp: 100,
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
