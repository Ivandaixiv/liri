import React, { Component } from "react";
import AppRoutes from "../../../ui/routes";
import LoginContainer from "../../pages/Login";
import Router from "react-router-dom";

// App component - represents the whole app
class App extends Component {
  render() {
    return (
      <div className="container">
        <AppRoutes />
        {/* <Router> */}
        {/* <LoginContainer /> */}
        Hello
        {/* </Router> */}
      </div>
    );
  }
}
export default App;
