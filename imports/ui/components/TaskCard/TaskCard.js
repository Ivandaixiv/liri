import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  IconButton
} from "@material-ui/core";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import DoneIcon from "@material-ui/icons/Done";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import moment from "moment";
import Box from "@material-ui/core/Box";
import "../../../api/tasks";
import "../../../api/users";
import { Pets } from "../../../api/pets";
import { withTracker } from "meteor/react-meteor-data";

class TaskCard extends Component {
  handleComplete = () => {
    Meteor.call("task.removeTask", this.props.task);
    Meteor.call("user.addCounters", this.props.task.exp);
    Meteor.call(
      "pets.addCounters",
      this.props.task.exp,
      this.props.pets[0].ownerId
    );
    Meteor.call("user.addStreak");
    Meteor.call("pets.evolve", this.props.pets[0].ownerId);
  };
  handleDelete = () => {
    Meteor.call("task.removeTask", this.props.task);
    Meteor.call("pets.takeHP", this.props.pets[0]);
    Meteor.call("user.removeStreak");
  };
  render() {
    const { classes, task, pets, userid } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <span className={classes.userInfo}>{task && task.task}</span>
          <br />
          <Divider />
          <Box className={classes.split}>
            <div>
              <Typography variant="caption">Start/Started: </Typography>
              {task && moment(task.startDate).fromNow()}
            </div>
            <div>
              <IconButton onClick={this.handleComplete}>
                <DoneIcon color="primary" />
              </IconButton>
              <IconButton onClick={this.handleDelete}>
                <DeleteOutlinedIcon style={{ color: "red" }} />
              </IconButton>
            </div>
          </Box>
        </CardContent>
      </Card>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("pets");
  return {
    userId: Meteor.userId(),
    pets: Pets.find({}).fetch()
  };
})(withStyles(styles)(TaskCard));
