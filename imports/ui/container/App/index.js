import React, { Component } from "react";
import AppRoutes from "../../../ui/routes";
// App component - represents the whole app
class App extends Component {
  render() {
    return (
      <div className="container">
        <AppRoutes />
      </div>
    );
  }
}
export default App;
