import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
// import AccountForm
// import PropTypes from "prop-types";

const Login = ({}) => {
  return (
    <div>
      <Typography variant="h2">Your Stats</Typography>
      <Typography></Typography>
      <img src="../../../src/image/liri.png"></img>
    </div>
  );
};

export default withStyles(styles)(Login);
