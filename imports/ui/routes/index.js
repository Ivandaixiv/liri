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
// import PrivateRoute from "../components/PrivateRoute";
// import FullScreenLoader from "../components/FullScreenLoader";

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };
  }

  toggleIsLoggedIn = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };

  render() {
    return this.state.isLoggedIn ? (
      <Router>
        <NavBar toggleIsLoggedIn={this.toggleIsLoggedIn} />
        <Switch>
          <Route component={NotFound} />
        </Switch>
      </Router>
    ) : (
      <Router>
        <NavBar toggleIsLoggedIn={this.toggleIsLoggedIn} />
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
    );
  }
}

export default Routes;
