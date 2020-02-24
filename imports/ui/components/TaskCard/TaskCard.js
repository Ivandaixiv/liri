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
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import moment from "moment";
import Box from "@material-ui/core/Box";
import "../../../api/tasks";
import "../../../api/users";
import "../../../api/pets";

class TaskCard extends Component {
  render() {
    const handleComplete = () => {
      console.log("Completed");
      // Meteor.removeTask
      Meteor.call("task.removeTask", task);
      Meteor.call("user.addExp", task.exp);
      Meteor.call("user.addStreak");
    };
    const handleDelete = () => {
      console.log("Deleted");
      Meteor.call("task.removeTask", task);
      // Updates pets health
    };
    const { classes, task, userid } = this.props;
    console.log("EXP", task.exp);
    console.log("Props", this.props);
    return (
      <Card>
        <CardContent className={classes.card}>
          <span className={classes.userInfo}>{task && task.task}</span>
          <br />
          <Divider />
          <Box className={classes.split}>
            <div>
              <Typography variant="caption">Start/Started: </Typography>
              {task && moment(task.startDate).fromNow()}
            </div>
            <div>
              <IconButton onClick={handleComplete}>
                <DoneIcon />
              </IconButton>
              <IconButton onClick={handleDelete}>
                <DeleteOutlineIcon />
              </IconButton>
            </div>
          </Box>
        </CardContent>
      </Card>
    );
  }
}
export default withStyles(styles)(TaskCard);
