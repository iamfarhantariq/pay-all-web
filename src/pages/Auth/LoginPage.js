import React, { useEffect } from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LoginContent from "../../components/Auth/LoginContent";

export const useStyles = makeStyles((theme) => ({
  rootContainer: {
    width: "100%",
    height: "100vh",
    backgroundColor: theme.palette.background.default,
  },
  loginContainer: {
    padding: "32px 48px",
    backgroundColor: "white",
    margin: "7rem 0",
    width: "20rem",
  },
}));

const LoginPage = () => {
  const classes = new useStyles();
  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <Box className={classes.rootContainer}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Box className={classes.loginContainer}>
          <LoginContent />
        </Box>
      </Grid>
    </Box>
  );
};

export default LoginPage;
