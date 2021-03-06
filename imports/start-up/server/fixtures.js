//Location for dumy data - TEST DATA
import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { Tasks } from "../../api/tasks";
import { Pets } from "../../api/pets";

Meteor.startup(() => {
  if (Meteor.users.find({}).count() === 0) {
    Accounts.createUser({
      username: "user1",
      email: "a@a.com",
      password: "a",
      mainFocus: "Fitness",
      streak: 1,
      exp: 100,
      profile: {
        friends: [],
        taskCompleted: 0
      }
    });
    Accounts.createUser({
      username: "user2",
      email: "b@b.com",
      password: "a",
      mainFocus: "Fitness",
      streak: 1,
      exp: 100,
      profile: {
        friends: []
      }
    });
    Accounts.createUser({
      username: "user3",
      email: "c@c.com",
      password: "a",
      mainFocus: "Fitness",
      streak: 1,
      exp: 100,
      profile: {
        friends: []
      }
    });
  }
  // Tasks creatorId and Pets ownerId is not linked to use because of Meteor.accounts
  if (Tasks.find({}).count() === 0) {
    Tasks.insert({
      owner: "kDJnXKmQ2FkRejxWZ",
      title: "A Random Task",
      complete: false,
      creatorId: 1,
      dueDate: null,
      tags: "productivity",
      created: new Date()
    });
  }

  if (Pets.find({}).count() === 0) {
    Pets.insert({
      name: "Pikachu",
      hp: 100,
      stage: 1,
      species: 1,
      ownerId: 1
    });
  }
});
