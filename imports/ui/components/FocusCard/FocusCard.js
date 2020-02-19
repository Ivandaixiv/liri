import React from "react";
import styles from "./styles";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  withStyles
} from "@material-ui/core";

const FocusCard = ({ classes }) => {
  return (
    <div>
      <Button
        color="primary"
        onClick={() => {
          console.log("Button is clicked");
        }}
      >
        <Card className={classes.container}>
        <Typography variant="h4">Fitness</Typography>
          <CardMedia
            className={classes.card}
            component="img"
            image="https://cdn2.iconfinder.com/data/icons/fitness-and-sports/100/Fitnes-13-512.png"
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

export default withStyles(styles)(FocusCard);
