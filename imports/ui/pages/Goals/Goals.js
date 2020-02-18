import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

class Goals extends Component {
  render() {
    const { classes } = this.props;
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
      </div>
    );
  }
}

export default withStyles(styles)(Goals);
