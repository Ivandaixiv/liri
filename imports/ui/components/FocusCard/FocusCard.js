import React from "react";
import styles from "./styles";
import { withTracker } from "meteor/react-meteor-data";
import { Users } from "../../../api/users";
import { Tasks } from "../../../api/tasks";
import "../../../api/tasks";
import "../../../api/users";
import {
  Card,
  CardMedia,
  Button,
  Typography,
  withStyles
} from "@material-ui/core";



const FocusCard = props => {
  const { classes, user, userId, tasks } = props;
  console.log(props)
  const onSubmit = value => {
    const { task } = values;
    if (value === "fitness") {

    } else if (value === "health") {
      Meteor.call("user.addTask", userId, value);
    }
  };

  return (
    <div className={classes.mainContainer}>
      <Button
        color="primary"
        onClick={() => {
          Meteor.call("task.addTask", task)
        }}
      >
        <Card className={classes.container}>
          <Typography variant="h4">Fitness</Typography>
          <CardMedia
            className={classes.card}
            component="img"
            image="/liri.png"
          />
          <Typography variant="body2" className={classes.text} component="p">
            Praesent et lectus ultricies, convallis odio in, auctor erat. Nunc
            ut lobortis nunc. In at semper justo, at hendrerit dui.
          </Typography>
        </Card>
      </Button>

      <Button
        color="primary"
        onClick={() => {

        }}
      >
        <Card className={classes.container}>
          <Typography variant="h4">Health</Typography>
          <CardMedia
            className={classes.card}
            component="img"
            image="/liri.png"
          />
          <Typography variant="body2" className={classes.text} component="p">
            Praesent et lectus ultricies, convallis odio in, auctor erat. Nunc
            ut lobortis nunc. In at semper justo, at hendrerit dui.
          </Typography>
        </Card>
      </Button>

      <Button
        color="primary"
        onClick={() => {
          onSubmit(
            Meteor.call("user.addTask", userId, ["Test", "Test2", "Test3"])
          );
        }}
      >
        <Card className={classes.container}>
          <Typography variant="h4">Placeholder</Typography>
          <CardMedia
            className={classes.card}
            component="img"
            image="/liri.png"
          />
          <Typography variant="body2" className={classes.text} component="p">
            Praesent et lectus ultricies, convallis odio in, auctor erat. Nunc
            ut lobortis nunc. In at semper justo, at hendrerit dui.
          </Typography>
        </Card>
      </Button>

      <Button
        color="primary"
        onClick={() => {
          onSubmit(
            Meteor.call("user.addTask", userId, ["Test", "Test2", "Test3"])
          );
        }}
      >
        <Card className={classes.container}>
          <Typography variant="h4">Placeholder</Typography>
          <CardMedia
            className={classes.card}
            component="img"
            image="/liri.png"
          />
          <Typography variant="body2" className={classes.text} component="p">
            Praesent et lectus ultricies, convallis odio in, auctor erat. Nunc
            ut lobortis nunc. In at semper justo, at hendrerit dui.
          </Typography>
        </Card>
      </Button>

      <Button
        color="primary"
        onClick={() => {
          onSubmit(
            Meteor.call("user.addTask", userId, ["Test", "Test2", "Test3"])
          );
        }}
      >
        <Card className={classes.container}>
          <Typography variant="h4">Placeholder</Typography>
          <CardMedia
            className={classes.card}
            component="img"
            image="/liri.png"
          />
          <Typography variant="body2" className={classes.text} component="p">
            Praesent et lectus ultricies, convallis odio in, auctor erat. Nunc
            ut lobortis nunc. In at semper justo, at hendrerit dui.
          </Typography>
        </Card>
      </Button>

      <Button
        color="primary"
        onClick={() => {
          onSubmit(
            Meteor.call("user.addTask", userId, ["Test", "Test2", "Test3"])
          );
        }}
      >
        <Card className={classes.container}>
          <Typography variant="h4">Placeholder</Typography>
          <CardMedia
            className={classes.card}
            component="img"
            image="/liri.png"
          />
          <Typography variant="body2" className={classes.text} component="p">
            Praesent et lectus ultricies, convallis odio in, auctor erat. Nunc
            ut lobortis nunc. In at semper justo, at hendrerit dui.
          </Typography>
        </Card>
      </Button>
    </div>
  );
};

export default withTracker(() => {
  Meteor.subscribe("user");
  Meteor.subscribe("tasks");
  return {
    user: Users.find({}).fetch(),
    userId: Meteor.userId(),
    tasks: Tasks.find({}).fetch()
  };
})(withStyles(styles)(FocusCard));
