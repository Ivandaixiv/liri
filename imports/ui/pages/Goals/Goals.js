import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import TaskCard from "../../components/TaskCard";
import { withTracker } from "meteor/react-meteor-data";
import { Tasks } from "../../../api/tasks";
import AddTask from "../../components/AddTask";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

class Goals extends Component {
  render() {
    const { classes, tasks } = this.props;
    return (
      <div className={classes.pad}>
        <Card className={classes.card}>
          <CardContent>
            <div className={classes.username}>
              <Typography variant="h4">{this.props.username}</Typography>
            </div>
            <div>
              <Typography variant="h4">
                <div>
                  <div>
                    <Typography className={classes.bold}>My Goals</Typography>{" "}
                  </div>
                  <div>
                    <PopupState variant="popover" popupId="demo-popup-popover">
                      {popupState => (
                        <div>
                          <Button
                            variant="contained"
                            color="primary"
                            {...bindTrigger(popupState)}
                          >
                            Add New Task
                          </Button>
                          <Popover
                            {...bindPopover(popupState)}
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "left"
                            }}
                            transformOrigin={{
                              vertical: "top",
                              horizontal: "right"
                            }}
                          >
                            <Box p={2}>
                              <AddTask />
                            </Box>
                          </Popover>
                        </div>
                      )}
                    </PopupState>
                  </div>
                </div>
              </Typography>
            </div>
          </CardContent>
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
