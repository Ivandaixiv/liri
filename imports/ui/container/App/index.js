import React, { Component } from "react";
import LoginContainer from "../../pages/Login";
import { BrowserRouter as Router } from "react-router-dom";

// App component - represents the whole app
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <LoginContainer />
        </div>
      </Router>
    );
  }
}
export default App;
