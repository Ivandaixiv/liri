import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import TaskCard from "../../components/TaskCard";
import { withTracker } from "meteor/react-meteor-data";
import { Tasks } from "../../../api/tasks";

class Goals extends Component {
  render() {
    const { classes, tasks } = this.props;
    console.log(this.props.tasks);
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
        <Grid item xs="auto" className={classes.gridSpace}>
          <Grid container justify="center" spacing={3}>
            {tasks.length > 0 &&
              tasks.map(task => {
                console.log(task);
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
  console.log(this.props);
  Meteor.subscribe("tasks");
  return {
    tasks: Tasks.find({}).fetch()
  };
})(withStyles(styles)(Goals));
