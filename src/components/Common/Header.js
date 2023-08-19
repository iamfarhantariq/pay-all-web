import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import cookie from "js-cookie";
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Hidden,
  Menu,
  MenuItem,
  Box,
} from "@material-ui/core";
import { NAV_BAR_COLOR } from "../../constants/colors";
import { PROJECT_NAME } from "../../constants/strings";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import loggedIn from "../../utils/loggedIn";
import { BEARER_TOKEN } from "../../constants/cookies";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    fontFamily: "Roboto",
    letterSpacing: 2.8,
    cursor: "pointer",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  middleText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Roboto",
    letterSpacing: 0.5,
    marginLeft: "2rem",
  },
  buttonFontSize: {
    color: "white",
    fontSize: 16,
    fontFamily: "Roboto",
    letterSpacing: 1.2,
    fontWeight: "bold",
    cursor: "pointer",
    marginLeft: "2rem",
    "&:hover": {
      color: "#f1f1f1",
    },
  },
  AppBar: {
    backgroundColor: NAV_BAR_COLOR,
  },
}));

const Header = () => {
  const classes = new useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [rightMenu, setRightMenu] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (event) => {
    setRightMenu(event.currentTarget);
  };

  const handleMenuClose = () => {
    setRightMenu(null);
  };

  const handleClick = (type) => {
    return window.location.assign(
      type === "organization"
        ? "/register-user/organization"
        : "/register-user/personal"
    );
  };

  const handleLogout = () => {
    cookie.remove(BEARER_TOKEN);
    window.location.reload();
  };

  const Menus = () => {
    return (
      <>
        <Typography
          color="inherit"
          className={classes.buttonFontSize}
          onClick={() => handleClick("organization")}
        >
          Register a company account
        </Typography>
        <Typography
          color="inherit"
          className={classes.buttonFontSize}
          onClick={() => handleClick("personal")}
        >
          Register a private account
        </Typography>
      </>
    );
  };

  return (
    <>
      <AppBar position="fixed" elevation={0} className={classes.AppBar}>
        <Grid>
          <Toolbar>
            {!loggedIn() && (
              <Hidden only={["xl", "lg", "md"]}>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={(event) => setAnchorEl(event.currentTarget)}
                >
                  <MenuIcon style={{ color: "white" }} />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      handleClick("organization");
                    }}
                  >
                    Register a company account
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      handleClick("personal");
                    }}
                  >
                    Register a private account
                  </MenuItem>
                </Menu>
              </Hidden>
            )}
            <Typography
              variant="h2"
              className={classes.title}
              onClick={() => window.location.assign("/")}
            >
              {PROJECT_NAME}
            </Typography>
            {!loggedIn() ? (
              <Hidden only={["sm", "xs"]}>
                <Menus />
              </Hidden>
            ) : (
              <Hidden only={["sm", "xs"]}>
                <Typography color="inherit" className={classes.middleText}>
                  Good morning Farhan
                </Typography>
              </Hidden>
            )}
            <Grid className={classes.grow} />
            {loggedIn() ? (
              <>
                <Box
                  style={{
                    display: "inline-flex",
                    cursor: "pointer",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    color="inherit"
                    className={classes.buttonFontSize}
                    onClick={handleMenuClick}
                  >
                    Farhan Tariq
                  </Typography>
                  <ArrowDropDownIcon
                    style={{ color: "white" }}
                  />
                </Box>
                <Menu
                  id="simple-menu"
                  anchorEl={rightMenu}
                  keepMounted
                  open={Boolean(rightMenu)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleLogout();
                      handleMenuClose();
                    }}
                  >
                    Log out
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Typography
                color="inherit"
                className={classes.buttonFontSize}
                onClick={() => window.location.assign("/login")}
              >
                Login instead
              </Typography>
            )}
          </Toolbar>
        </Grid>
      </AppBar>
    </>
  );
};

export default Header;
