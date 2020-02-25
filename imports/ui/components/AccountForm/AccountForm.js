import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Field } from "react-final-form";
import {
  FormControl,
  Input,
  InputLabel,
  Typography,
  Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { withTracker } from "meteor/react-meteor-data";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import "../../../api/users";
import "../../../api/pets";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Alert from "@material-ui/lab/Alert";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      Liri Productivity App {new Date().getFullYear()}{" "}
    </Typography>
  );
}

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formToggle: true,
      error: null,
      errorMsg: null
    };
  }

  timeout = () => {
    setTimeout(() => {
      this.setState({
        errorMsg: null
      });
    }, 3000);
  };

  validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = <Box color="error.main">REQUIRED</Box>;
    }
    if (!values.password) {
      errors.password = <Box color="error.main">REQUIRED</Box>;
    }
    return errors;
  };

  signup = values => {
    const { username, password, email } = values;

    Accounts.createUser({ username, email, password }, error => {
      if (error) {
        this.setState({ errorMsg: error.message });
        console.log(error);
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
        this.setState({ errorMsg: error.message });
        console.log(error);
      }
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Form
            onSubmit={values =>
              !this.state.formToggle ? this.signup(values) : this.login(values)
            }
            validate={this.validate}
            render={({ handleSubmit, pristine, invalid, submitting, form }) => (
              <form onSubmit={handleSubmit} className={classes.form}>
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
                          {meta.touched && meta.error && (
                            <span style={{ fontFamily: "georgia" }}>
                              {meta.error}
                            </span>
                          )}
                        </>
                      )}
                    </Field>
                  </FormControl>
                )}
                <FormControl fullWidth>
                  <InputLabel htmlFor="email">Email*</InputLabel>
                  <Field name="email">
                    {({ input, meta }) => (
                      <>
                        <Input
                          id="email"
                          type="email"
                          inputProps={{
                            ...input,
                            autoComplete: "off"
                          }}
                          value={input.value}
                        />
                        {meta.touched && meta.error && (
                          <span style={{ fontFamily: "georgia" }}>
                            {meta.error}
                          </span>
                        )}
                      </>
                    )}
                  </Field>
                </FormControl>
                <FormControl fullWidth style={{ paddingBottom: "20px" }}>
                  <InputLabel htmlFor="password">Password*</InputLabel>
                  <Field name="password">
                    {({ input, meta }) => (
                      <>
                        <Input
                          id="password"
                          type="password"
                          inputProps={{
                            ...input,
                            autoComplete: "off"
                          }}
                          value={input.value}
                        />

                        {meta.touched && meta.error && (
                          <span style={{ fontFamily: "georgia" }}>
                            {meta.error}
                          </span>
                        )}
                      </>
                    )}
                  </Field>
                </FormControl>
                <FormControl>
                  <div className={classes.buttons}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      disabled={pristine || invalid}
                    >
                      {this.state.formToggle ? (
                        <Typography>Sign in</Typography>
                      ) : (
                        <Typography>Create an Account</Typography>
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        form.reset();
                        this.setState({
                          formToggle: !this.state.formToggle
                        });
                      }}
                    >
                      {this.state.formToggle ? (
                        <Typography>Register</Typography>
                      ) : (
                        <Typography>Login</Typography>
                      )}
                    </Button>
                  </div>
                  <br />
                  {this.state.errorMsg && (
                    <Alert variant="outlined" severity="warning">
                      {this.state.errorMsg}
                      {this.timeout()}
                    </Alert>
                  )}
                </FormControl>
              </form>
            )}
          />
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

export default withTracker(() => {
  return {
    userId: Meteor.userId()
  };
})(withRouter(withStyles(styles)(AccountForm)));
