import React from "react";
import styles from "./styles";
import { Form, Field, FormSpy } from "react-final-form";
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

let tags = [];
console.log(tags);
onSubmit = () => {
  tags.push(value);
  console.log(tags);
};

const FocusCard = ({ classes }) => {
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
      <Button className={classes.finalSubmit} >Submit</Button>
    </div>
    
  );
};

export default withStyles(styles)(FocusCard);
