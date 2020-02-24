import React, { Component } from "react";
import FriendList from "../../components/FriendList/FriendList";
import styles from "./styles";
import { Container } from "@material-ui/core";

const ScoreboardContainer = () => {
  const classes = styles();
  return (
    <Container className={classes.container}>
      <FriendList />
    </Container>
  );
};
export default ScoreboardContainer;
