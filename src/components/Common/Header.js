import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Hidden,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { NAV_BAR_COLOR } from "../../constants/colors";
import { PROJECT_NAME } from "../../constants/strings";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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
  buttonFontSize: {
    color: "white",
    fontSize: 16,
    fontFamily: "Roboto",
    letterSpacing: 1.2,
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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (type) => {
    return window.location.assign(
      type === "organization"
        ? "/register-user/organization"
        : "/register-user/personal"
    );
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
        <Grid sm={12} xs={12}>
          <Toolbar>
            <Hidden only={["lg", "md"]}>
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

            <Typography
              variant="h2"
              className={classes.title}
              onClick={() => window.location.assign("/")}
            >
              {PROJECT_NAME}
            </Typography>
            <Hidden only={["sm", "xs"]}>
              <Menus />
            </Hidden>
            <Grid className={classes.grow} />
            <Typography
              color="inherit"
              className={classes.buttonFontSize}
              onClick={() => window.location.assign("/")}
            >
              Login instead
            </Typography>
          </Toolbar>
        </Grid>
      </AppBar>
    </>
  );
};

export default Header;
