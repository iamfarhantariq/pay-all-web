import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, AppBar, Toolbar, Typography } from "@material-ui/core";
import { NAV_BAR_COLOR } from "../../constants/colors";
import { PROJECT_NAME } from "../../constants/strings";

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

  const handleClick = (type) => {
    return window.location.assign(
      type === "organization"
        ? "/register-user/organization"
        : "/register-user/personal"
    );
  };

  return (
    <>
      <AppBar position="fixed" elevation={0} className={classes.AppBar}>
        <Grid sm={12} xs={12}>
          <Toolbar>
            <Typography
              variant="h2"
              className={classes.title}
              onClick={() => window.location.assign("/")}
            >
              {PROJECT_NAME}
            </Typography>
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
            <Grid className={classes.grow} />
            <Typography color="inherit" className={classes.buttonFontSize}>
              Login instead
            </Typography>
          </Toolbar>
        </Grid>
      </AppBar>
    </>
  );
};

export default Header;
