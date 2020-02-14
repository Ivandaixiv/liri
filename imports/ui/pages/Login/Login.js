import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
// import AccountForm
// import PropTypes from "prop-types";

const Login = ({}) => {
  return (
    <Grid item xs={12} sm={12} md={6}>
      <Typography gutterBottom variant="h3">
        Login Screen
      </Typography>
      <AccountForm />
    </Grid>
  );
};

export default withStyles(styles)(Home);
