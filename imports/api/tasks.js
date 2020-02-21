import { Mongo } from "meteor/mongo";

export const Tasks = new Mongo.Collection("tasks");

if (Meteor.isServer) {
  Meteor.publish("tasks", function tasksPublication() {
    return Tasks.find({ ownerId: this.userId });
  });
}
Meteor.methods({
  // How to write a methtod in Meteor methods
  "task.complete"(task) {
    if (task.owner !== this.userId) {
      // Checks if the user matches
      throw new Meteor.Error(
        "task.toggleComplete.not-authorized",
        "You are not allowed to update tasks for other users."
      );
    }
    // change the complete status
    Tasks.update(task._id, {
      $set: { complete: true }
    });
  },
  "task.removeTask"(task) {
    if (task.owner !== this.userId) {
      // Checks if the user matches
      throw new Meteor.Error(
        "task.removeTask.not-authorized",
        "You are not allowed to remove tasks for other users."
      );
    }
    Tasks.remove(task._id);
  },
  "task.addTask"(task, goal, startDate, endDate, fullday) {
    if (!this.userId) {
      // Checks if the user matches
      throw new Meteor.Error(
        "task.addTask.not-authorized",
        "You are not allowed to add tasks."
      );
    }

    Tasks.insert({
      task,
      complete: false,
      ownerId: this.userId,
      startDate: startDate ? startDate : new Date(),
      endDate: endDate ? endDate : null,
      goal,
      fullday,
      exp: task.length
    });
  }
});
