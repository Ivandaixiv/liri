import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import {
  Typography,
  CardMedia,
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Menu
} from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ExitIcon from "@material-ui/icons/MeetingRoom";
import { withRouter, Link } from "react-router-dom";

const Navigation = props => {
  const { classes } = props;
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolbar}>
          <div className={classes.title}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={open}
              onClose={handleClose}
            >
              <Link to="/profile" className={classes.link}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
              </Link>
              <Link to="/goals" className={classes.link}>
                <MenuItem onClick={handleClose}>Goals</MenuItem>
              </Link>
              <Link to="/calendar" className={classes.link}>
                <MenuItem onClick={handleClose}>Calendar</MenuItem>
              </Link>
              <Link to="/scoreboard" className={classes.link}>
                <MenuItem onClick={handleClose}>Scoreboard</MenuItem>
              </Link>
            </Menu>
            <Typography className={classes.titleText} variant="h5">
              LIRI
            </Typography>
          </div>
          <Link to="/home">
            <CardMedia
              className={classes.liri}
              component="img"
              image="/liri.png"
            />
          </Link>
          {auth && (
            <IconButton
              color="secondary"
              onClick={(handleClose, Meteor.logout)}
            >
              <ExitIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(withStyles(styles)(Navigation));
