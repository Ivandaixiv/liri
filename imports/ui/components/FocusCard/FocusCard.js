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
  const { classes, user, userId, tasks } = props;
  console.log(user);
  //console.log(props);
  const onSubmit = value => {
    if (value === "fitness") {
      Meteor.call("user.addTask", userId, value);
    } else if (value === "health") {
      Meteor.call("user.addTask", userId, value);
    }
  };

  return (
    <div className={classes.mainContainer}>
      
      <Button
        color="primary"
        onClick={() => {
          onSubmit((value = "fitness"));
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
          onSubmit((value = "health"));
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
          onSubmit((value = "Test"));
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
          onSubmit();
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
          onSubmit((value = "PLACEHOLDER TAG"));
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
          onSubmit((value = "PLACEHOLDER TAG"));
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

  return {
    user: Users.find({}).fetch(),
    userId: Meteor.userId(),
    tasks: Tasks.find({}).fetch()
  };
})(withStyles(styles)(FocusCard));
