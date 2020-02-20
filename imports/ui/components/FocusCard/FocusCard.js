import React from "react";
import styles from "./styles";
import { Form, Field, FormSpy } from "react-final-form";
import { withTracker } from "meteor/react-meteor-data";
import { Users } from "../../../api/users";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Button,
  Typography,
  withStyles,
  FormControl
} from "@material-ui/core";

const FocusCard = props => {
  const { classes, user, userId } = props;
  console.log(user);
  const onSubmit = value => {
    if (value === "fitness") {
      Meteor.call("user.updateFocus", userId, value);
    }
  };

  return (
    <div className={classes.mainContainer}>
      <Typography className={classes.header}>What is your goal?</Typography>
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
          onSubmit((value = "Health"));
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

//   render() {
//     let { classes } = this.props;
//     return (
//       <div>
//         <Typography variant="h3">test</Typography>
//         {console.log("test")};
//       </div>
//     );
//   }
// }

export default withTracker(() => {
  Meteor.subscribe("user");

  return {
    user: Users.find({}).fetch(),
    userId: Meteor.userId()
  };
})(withStyles(styles)(FocusCard));
