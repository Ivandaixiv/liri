import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Field } from "react-final-form";
import {
  FormControl,
  Input,
  Grid,
  InputLabel,
  Typography,
  Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { withTracker } from "meteor/react-meteor-data";
import { Users } from "../../../api/users";

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

  signup = values => {
    const { username, password, email } = values;

    Accounts.createUser({ username, email, password }, error => {
      if (error) {
        throw new Error(error);
      }
      if (Meteor.user()) {
        Meteor.call("user.newAccount", Meteor.userId());
        Meteor.call("pets.addPet");
      }
    });
  };
  login = values => {
    const { email, password } = values;

    Meteor.loginWithPassword(email, password, error => {
      if (error) {
        throw new Error(error);
      }
    });
  };

  render() {
    const { classes } = this.props;
    console.log("Logged In: ", Meteor.userId());
    return (
      <Form
        onSubmit={values =>
          !this.state.formToggle ? this.signup(values) : this.login(values)
        }
        validate={this.validate}
        render={({ handleSubmit, pristine, invalid, submitting, form }) => (
          <form onSubmit={handleSubmit} className={classes.accountForm}>
            {!this.state.formToggle && (
              <FormControl fullWidth>
                <InputLabel htmlFor="fullname">Username</InputLabel>
                <Field name="username">
                  {({ input, meta }) => (
                    <>
                      <Input
                        id="username"
                        type="text"
                        inputProps={{
                          ...input,
                          autoComplete: "off"
                        }}
                        value={input.value}
                      />

                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </>
                  )}
                </Field>
              </FormControl>
            )}
            <FormControl fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Field name="email">
                {({ input, meta }) => (
                  <>
                    <Input
                      id="email"
                      type="text"
                      inputProps={{
                        ...input,
                        autoComplete: "off"
                      }}
                      value={input.value}
                    />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </>
                )}
              </Field>
            </FormControl>
            <FormControl fullWidth>
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
            <FormControl>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  color="secondary"
                  disabled={pristine || invalid}
                >
                  {this.state.formToggle ? "Enter" : "Create Account"}
                </Button>
                <Typography>
                  <button
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

export default withTracker(() => {
  return {
    userId: Meteor.userId()
  };
})(withRouter(withStyles(styles)(AccountForm)));
