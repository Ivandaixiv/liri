import React, { Component } from "react";
import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";

export default class AccountForm extends Component {
  login = event => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    Meteor.loginWithPassword(username, password, error => {
      if (error) {
        console.log(error);
      } else {
        props.setLoggingIn(Meteor.loggingIn());
        window.location.replace("/member-area");
      }
    });
  };

  render() {
    console.log("Logged In: ", Meteor.userId());
    return (
      <div>
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
