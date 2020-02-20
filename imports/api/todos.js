import { Mongo } from "meteor/mongo";

// // collection is equivalent to a table in postgre
export const ToDos = new Mongo.Collection("todos");
if (Meteor.isServer) {
  Meteor.publish("todos", function todosPublication() {
    return ToDos.find({ owner: this.userId });
  });
}

Meteor.methods({
  "todos.toggleComplete"(todo) {
    // method name published in quotes
    if (todo.owner !== this.userId) {
      throw new Meteor.Error(
        "todos.toggleComplete.not-authorized", // title
        "You are not allowed to update to-dos for other users." // description
      );
    }
    ToDos.update(todo._id, {
      $set: { complete: !todo.complete }
    });
  },

  "todos.addtask"(inputValue) {
    if (!this.userId) {
      throw new Meteor.Error(
        "todos.toggleComplete.not-authorized", // title
        "You are not allowed to update to-dos for other users." // description
      );
    }
    ToDos.insert({
      title: inputValue,
      complete: false,
      owner: this.userId
    });
  },

  "todos.removeTodo"(todo) {
    if (todo.owner !== this.userId) {
      throw new Meteor.Error(
        "todos.toggleComplete.not-authorized", // title
        "You are not allowed to update to-dos for other users." // description
      );
    }
    ToDos.remove(todo._id);
  },

  "todos.removeCompleted"() {
    if (!this.userId) {
      throw new Meteor.Error(
        "todos.toggleComplete.not-authorized", // title
        "You are not allowed to update to-dos for other users." // description
      );
    }
    ToDos.remove({ owner: this.userId, complete: true });
  }
});
