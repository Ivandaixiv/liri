import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import Routes from "./src/routes";

import App from "../imports/ui/container/App";

Meteor.startup(() => {
  render(<App />, document.getElementById("root"));
});
