import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Stats from "../pages/Stats";
import Scoreboard from "../pages/Scoreboard";
import Calendar from "../pages/Calendar";
import Goals from "../pages/Goals";
import AddGoals from "../pages/AddGoals";
import Friends from "../pages/Friends";
import Settings from "../pages/Settings";
import NavBar from "../components/NavBar";

// import FullScreenLoader from "../components/FullScreenLoader";

const Routes = props => {
  return props.userId ? (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/stats" component={Stats} />
        <Route exact path="/scoreboard" component={Scoreboard} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/goals" component={Goals} />
        <Route exact path="/addgoals" component={AddGoals} />
        <Route exact path="/friends" component={Friends} />
        <Route exact path="/settings" component={Settings} />
        <Redirect from="*" to="/stats" />
      </Switch>
    </Router>
  ) : (
    <FullScreenLoader />
  );
};

export default withTracker(() => {
  return {
    userId: Meteor.userId()
  };
})(Routes);
