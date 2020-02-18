import React, { Component } from "react";
import AppRoutes from "../../../ui/routes";
import LoginContainer from "../../pages/Login";
import { BrowserRouter as Router } from "react-router-dom";

// App component - represents the whole app
class App extends Component {
  render() {
    return (
      <div className="container">
        <AppRoutes />
        Hello world
      </div>
    );
  }
}
export default App;
