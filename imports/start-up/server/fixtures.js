//Location for dumy data - TEST DATA
import { Meteor } from "meteor/meteor";
import { Tasks } from "../../api/tasks";
import { Pets } from "../../api/pets";
import { Users } from "../../api/users";

Meteor.startup(() => {
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
