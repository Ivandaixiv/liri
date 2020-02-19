import React, { Component } from "react";
// import Gravatar from "react-gravatar";
import { Card, CardContent, Typography, Divider } from "@material-ui/core";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import DoneIcon from "@material-ui/icons/Done";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import moment from "moment";

class TaskCard extends Component {
  render() {
    let { classes, task } = this.props;
    console.log(task);
    return (
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.userInfo}>
            <Typography>
              {/* <Gravatar className={classes.gravatar} /> */}
              {task && task.title}
            </Typography>
          </div>
          <br />
          <Divider />
          <div className={classes.split}>
            {task && moment(task.created).fromNow()}
            <DoneIcon />
            <DeleteOutlineIcon />
            <AddCircleOutlineOutlinedIcon />
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(TaskCard);
