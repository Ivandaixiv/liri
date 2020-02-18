import React, { Component } from "react";
import AppRoutes from "../../routes";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "../../theme";
import { ThemeProvider } from "@material-ui/core";
import AccountForm from "../../components/AccountForm";

// App component - represents the whole app
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <AppRoutes />
        </Router>
      </ThemeProvider>
    );
  }
}
export default App;
