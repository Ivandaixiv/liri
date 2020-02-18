import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import styles from "./styles";

export default withRouter(withStyles(styles)(Scoreboard));
