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
import ExitIcon from "@material-ui/icons/PowerSettingsNew";
import { withRouter, Link, NavLink } from "react-router-dom";

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
              <Typography variant="h5" className={classes.menu}>
                Menu
              </Typography>
              <Link to="/home" className={classes.link}>
                <MenuItem onClick={handleClose}>Home</MenuItem>
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

            <Link to="/home" className={classes.link}>
              <Typography
                color="secondary"
                className={classes.titleText}
                variant="h5"
              >
                LIRI
              </Typography>
            </Link>
          </div>
          <Link to="/home">
            <CardMedia
              className={classes.liri}
              component="img"
              image="/liri.png"
            />
          </Link>
          <div>
            <NavLink to="/profile">
              <IconButton className={classes.link}>
                <AccountCircle color="secondary" />
              </IconButton>
            </NavLink>
            {auth && (
              <IconButton
                color="secondary"
                onClick={(handleClose, Meteor.logout)}
              >
                <ExitIcon />
              </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(withStyles(styles)(Navigation));
