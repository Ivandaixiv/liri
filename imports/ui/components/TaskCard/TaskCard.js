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
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import DoneIcon from "@material-ui/icons/Done";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { withTracker } from "meteor/react-meteor-data";
import moment from "moment";
import Box from "@material-ui/core/Box";
import "../../../api/tasks";
import "../../../api/users";

class TaskCard extends Component {
  render() {
    const handleComplete = () => {
      console.log("Completed");
    };
    const handleDelete = () => {
      console.log("Deleted");
    };
    let { classes, task } = this.props;
    console.log(task);
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

export default withTracker(() => {
  Meteor.subscribe("tasks");
  return {
    userId: Meteor.userId()
  };
})(withStyles(styles)(TaskCard));
