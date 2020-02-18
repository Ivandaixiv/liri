import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import { Form, Field, FormSpy } from "react-final-form";
import {
  FormControl,
  Grid,
  Input,
  InputLabelFormLabel,
  TextField,
  Typography,
  Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formToggle: true,
      error: null
    };
  }

  signup = event => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    Accounts.createUser({ username, email, password }, error =>
      console.log(error)
    );
  };

  login = event => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    Meteor.loginWithPassword(username, password, error => {
      if (error) {
        console.log(error);
      } else {
        props.setLoggingIn(Meteor.loggingIn());
        history.push("/stats");
      }
    });
  };

  render() {
    const { classes, history } = this.props;
    console.log("Logged In: ", Meteor.userId());
    return (
      <div>
        <h1 style={{ color: "white" }}>SignUp</h1>
        <form onSubmit={this.signup}>
          <input name="username" placeholder="username" type="text" />
          <input name="email" placeholder="email" type="text" />
          <input name="password" placeholder="password" type="password" />
          <button type="submit">Signup</button>
        </form>
        <h1 style={{ color: "white" }}>Log In</h1>
        <form onSubmit={this.login}>
          <input name="username" placeholder="username" type="text" />
          {/* <input name="email" placeholder="email" type="text" /> */}
          <input name="password" placeholder="password" type="password" />
          <button type="submit">Login</button>
        </form>

        <button onClick={Meteor.logout}>Logout</button>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(AccountForm));
