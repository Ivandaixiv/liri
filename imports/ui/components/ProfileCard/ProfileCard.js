import React from "react";
import { Card, CardContent, Typography, withStyles } from "@material-ui/core";
import styles from "./styles";

const ProfileCard = props => {
  const { classes,  } = props;
    console.log(Accounts)
    //console.log(props);
  return (
      <div className={classes.container}>
          <Card>
              <Typography>Username:  </Typography>
              
          </Card>
      </div>
  )
};

export default withStyles(styles)(ProfileCard);
