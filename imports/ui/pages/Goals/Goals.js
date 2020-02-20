import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import TaskCard from "../../components/TaskCard";
import { withTracker } from "meteor/react-meteor-data";
import { Tasks } from "../../../api/tasks";
import AddTask from "../../components/AddTask";

class Goals extends Component {
  render() {
    const { classes, tasks } = this.props;
    // console.log(this.props.userId);
    return (
      <div className={classes.pad}>
        <Card className={classes.card}>
          <CardContent>
            <div className={classes.username}>
              <Typography variant="h4">{this.props.username}</Typography>
            </div>
            <div>
              <Typography variant="h4">
                <span className={classes.bold}>My Goals</span>
              </Typography>
            </div>
          </CardContent>
        </Card>
        <Card>
          <AddTask />
        </Card>
        <Grid item xs="auto" className={classes.gridSpace}>
          <Grid container justify="center" spacing={3}>
            {tasks.length > 0 &&
              tasks.map(task => {
                return (
                  <Grid key={task._id}>
                    <TaskCard task={task} />
                  </Grid>
                );
              })}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("tasks");
  return {
    userId: Meteor.userId(),
    tasks: Tasks.find({}).fetch()
  };
})(withStyles(styles)(Goals));
