import { Meteor } from "meteor/meteor";
import "../imports/start-up/server";

Meteor.startup(() => {
  // code to run on server at startup
});
// Accounts.onCreateUser(function(options, user) {
//   if (options.profile) {
//     user.profile = options.profile;
//   } else {
//     user.profile = {};
//   }
//   user.profile.friends = [];
//   return user;
// });
