import React, { Component } from "react";
import { Card, CardContent, Typography, Divider } from "@material-ui/core";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import DoneIcon from "@material-ui/icons/Done";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { withTracker } from "meteor/react-meteor-data";
import { Tasks } from "../../../api/tasks";
import moment from "moment";
import Box from "@material-ui/core/Box";

class TaskCard extends Component {
  render() {
    let { classes, task } = this.props;
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
              <DoneIcon />
              <DeleteOutlineIcon />
              <AddCircleOutlineOutlinedIcon />
            </div>
          </Box>
        </CardContent>
      </Card>
    );
  }
}
export default withStyles(styles)(TaskCard);
