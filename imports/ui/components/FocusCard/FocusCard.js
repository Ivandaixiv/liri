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
  const { classes, user } = props;
 console.log(user);
const onSubmit = value => {
  if (value === "fitness" ){
    Meteor.user.update(
    userId,{$set: {focuses: [{value}] }}
    )
  }
}

  console.log(user);
  return (
    <div>
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
            image="http://place-puppy.com/200x199"
          />
          <Typography variant="body2" color="textSecondary" component="p">
            Praesent et lectus ultricies, convallis odio in, auctor erat. Nunc
            ut lobortis nunc. In at semper justo, at hendrerit dui.
          </Typography>
        </Card>
      </Button>

      <Button
        color="primary"
        onClick={() => {
          onSubmit((value = "Puppy!"));
        }}
      >
        <Card className={classes.container}>
          <Typography variant="h4">Puppy</Typography>
          <CardMedia
            className={classes.card}
            component="img"
            image="http://place-puppy.com/200x200"
          />
          <Typography variant="body2" color="textSecondary" component="p">
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
            image="http://place-puppy.com/200x205"
          />
          <Typography variant="body2" color="textSecondary" component="p">
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
            image="http://place-puppy.com/200x204"
          />
          <Typography variant="body2" color="textSecondary" component="p">
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
            image="http://place-puppy.com/200x203"
          />
          <Typography variant="body2" color="textSecondary" component="p">
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
            image="http://place-puppy.com/200x201"
          />
          <Typography variant="body2" color="textSecondary" component="p">
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
