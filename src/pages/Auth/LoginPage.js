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
    padding: "1rem 2rem",
    backgroundColor: "white",
    margin: "6rem 1rem",
    maxWidth: "22rem"
  },
}));

const LoginPage = () => {
  const classes = new useStyles();
  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <Box className={classes.rootContainer}>
      <Grid
        container
        direction="column"
        alignItems="center"
      >
        <Grid item>
          <Box
            display="flex"
            className={classes.loginContainer}
          >
            <LoginContent />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;
