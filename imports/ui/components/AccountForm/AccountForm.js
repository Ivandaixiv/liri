import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Field } from "react-final-form";
import {
  FormControl,
  Input,
  Grid,
  InputLabel,
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

  validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };

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
      <Form
        onSubmit={values => {
          const username = { variables: { username: values } };
          this.state.formToggle
            ? Meteor.loginWithPassword
            : signupMutation(user).catch(error => this.setState({ error }));
        }}
        validate={this.validate}
        render={({ handleSubmit, pristine, invalid, submitting, form }) => (
          <form onSubmit={handleSubmit} className={classes.accountForm}>
            {!this.state.formToggle && (
              <FormControl fullWidth className={classes.formControl}>
                <InputLabel htmlFor="fullname">Username</InputLabel>
                <Field name="username">
                  {({ input, meta }) => (
                    <Input
                      id="username"
                      type="text"
                      inputProps={{
                        ...input,
                        autoComplete: "off"
                      }}
                      value={input.value}
                    />
                  )}
                </Field>
              </FormControl>
            )}
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Field name="email">
                {({ input, meta }) => (
                  <Input
                    id="email"
                    type="text"
                    inputProps={{
                      ...input,
                      autoComplete: "off"
                    }}
                    value={input.value}
                  />
                )}
              </Field>
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Field name="password">
                {({ input, meta }) => (
                  <Input
                    id="password"
                    type="password"
                    inputProps={{
                      ...input,
                      autoComplete: "off"
                    }}
                    value={input.value}
                  />
                )}
              </Field>
            </FormControl>
            <FormControl className={classes.formControl}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Button
                  type="submit"
                  className={classes.formButton}
                  variant="contained"
                  size="large"
                  color="secondary"
                  disabled={pristine || invalid}
                >
                  {this.state.formToggle ? "Enter" : "Create Account"}
                </Button>
                <Typography>
                  <button
                    className={classes.formToggle}
                    type="button"
                    onClick={() => {
                      form.reset();
                      this.setState({
                        formToggle: !this.state.formToggle
                      });
                    }}
                  >
                    {this.state.formToggle
                      ? "Create an account."
                      : "Login to existing account."}
                  </button>
                </Typography>
              </Grid>
            </FormControl>
          </form>
        )}
      />
    );
  }
}

//     <button onClick={Meteor.logout}>Logout</button>

export default withRouter(withStyles(styles)(AccountForm));
