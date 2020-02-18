import React, { Component } from "react";
import AppRoutes from "../../routes";
import { BrowserRouter as Router } from "react-router-dom";

// App component - represents the whole app
class App extends Component {
  render() {
    return (
      <Router>
        <AppRoutes />
      </Router>
    );
  }
}
export default App;
