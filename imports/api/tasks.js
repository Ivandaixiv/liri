import { Mongo } from "meteor/mongo";

export const Tasks = new Mongo.Collection("tasks");

if (Meteor.isServer) {
  Meteor.publish("tasks", function tasksPublication() {
    console.log(this.userId);
    return Tasks.find({ _id: this.userId });
  });
}
Meteor.methods({
  // How to write a methtod in Meteor methods
  "task.toggleComplete"(task) {
    if (task.owner !== this.userId) {
      // Checks if the user matches
      throw new Meteor.Error(
        "task.toggleComplete.not-authorized",
        "You are not allowed to update tasks for other users."
      );
    }
    // change the complete status
    Tasks.update(task._id, {
      $set: { complete: !task.complete }
    });
  },
  "task.removeToDo"(task) {
    if (task.owner !== this.userId) {
      // Checks if the user matches
      throw new Meteor.Error(
        "task.removeTask.not-authorized",
        "You are not allowed to remove tasks for other users."
      );
    }
    Tasks.remove(task._id);
  },
  "task.addTask"(taskTitle, dueDate, tags) {
    if (!this.userId) {
      // Checks if the user matches
      throw new Meteor.Error(
        "task.addTask.not-authorized",
        "You are not allowed to add tasks."
      );
    }

    Tasks.insert({
      title: taskTitle,
      complete: false,
      creatorId: this.userId,
      dueDate: dueDate ? dueDate : null,
      tags
    });
  }
});
