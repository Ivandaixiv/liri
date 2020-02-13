//Location for dumy data - TEST DATA
import { Meteor } from "meteor/meteor";
import { ToDos } from "../../api/todo";

Meteor.startup(() => {
  if (ToDos.find().count() === 0) {
    ToDos.insert({ title: "Learn xyz", complete: false });
  }
});
