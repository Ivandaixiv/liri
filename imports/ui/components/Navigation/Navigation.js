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
import { withRouter } from "react-router-dom";

const Navigation = props => {
  const classes = props;
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
        <Toolbar>
          <div>
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
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Goals</MenuItem>
              <MenuItem onClick={handleClose}>Calendar</MenuItem>
              <MenuItem onClick={handleClose}>Scoreboard</MenuItem>
            </Menu>
          </div>

          <CardMedia
            className={classes.liri}
            component="img"
            image="/liri.png"
          />
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
