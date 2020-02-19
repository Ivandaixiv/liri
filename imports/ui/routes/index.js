import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Stats from "../pages/Stats";
import Scoreboard from "../pages/Scoreboard";
import Calendar from "../pages/Calendar";
import Goals from "../pages/Goals";
import Profile from "../pages/Profile";
import Navigation from "../components/Navigation";
import Login from "../pages/Login";
import Focuses from "../pages/Focuses";
import { Tasks } from "../../api/tasks";

// import FullScreenLoader from "../components/FullScreenLoader";

const Routes = props => {
  return props.userId ? (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/home" component={Stats} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/focus" component={Focuses} />
        <Route exact path="/scoreboard" component={Scoreboard} />
        <Route exact path="/goals" component={Goals} />
        <Redirect from="*" to="/home" />
      </Switch>
    </>
  ) : (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Redirect from="*" to="/login" />
    </Switch>
  );
};

export default withTracker(() => {
  return {
    userId: Meteor.userId()
  };
})(Routes);
