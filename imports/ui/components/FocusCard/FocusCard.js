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
      <Typography variant="h3">Focus</Typography>
      <Card className={classes.container}>
        <CardMedia
          className={classes.card}
          component="img"
          image="https://www.fillmurray.com/300/300"
        />
      </Card>
      {console.log("test")};
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
