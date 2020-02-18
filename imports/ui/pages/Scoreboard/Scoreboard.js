import React from "react";
import { Container, withStyles } from "@material-ui/core";
import styles from "./styles";
import ScoreboardList from "../../components/ScoreboardList";
// import PropTypes from "prop-types";

const Scoreboard = ({ classes, users }) => {
  return (
    <Container maxWidth="lg" className={classes.scoreboard}>
      <ScoreboardList friends={users} />
    </Container>
  );
};

export default withStyles(styles)(Scoreboard);
