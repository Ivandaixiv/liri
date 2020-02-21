import React from "react";
import styles from "./styles";
import { withTracker } from "meteor/react-meteor-data";
import { Users } from "../../../api/users";
import { Tasks } from "../../../api/tasks";
import {
  Card,
  CardMedia,
  Button,
  Typography,
  withStyles
} from "@material-ui/core";

const FocusCard = props => {
<<<<<<< HEAD
  const { classes, user, userId, tasks } = props;
  console.log(user);
  console.log(props);
  const onSubmit = value => {
    if (value === "fitnesss") {
      Meteor.call("user.addTask", userId, value);
    } else if (value === "health") {
      Meteor.call("user.addTask", userId, value);
=======
  const { classes, user, userId } = props;
  console.log(user);
  const onSubmit = value => {
    if (value === "fitness") {
      Meteor.call("user.updateFocus", userId, value);
>>>>>>> master
    }
  };

  return (
    <div className={classes.mainContainer}>
<<<<<<< HEAD
=======
      <Typography className={classes.header}>What is your goal?</Typography>
>>>>>>> master
      <Button
        color="primary"
        onClick={() => {
          onSubmit(
            Meteor.call("user.addTask", userId, [
              "Run for thirty minutes",
              "Hold a plank for one minute",
              "Do ten pull-ups"
            ])
          );
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
<<<<<<< HEAD
          onSubmit(
            Meteor.call("user.addTask", userId, [
              "Drink eight glasses of water",
              "Get at least eight hours of sleep",
              "Etiam varius tristique nunc vitae venenatis."
            ])
          );
=======
          onSubmit((value = "Health"));
>>>>>>> master
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
