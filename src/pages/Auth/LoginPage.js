import React, { useEffect } from "react";
import { Box, Grid } from "@material-ui/core";
import { useStyles } from "../../styles/default";
import LoginContent from "../../components/Auth/LoginContent";

const LoginPage = () => {
  const classes = new useStyles();
  useEffect(() => {
    document.title = "Login";
  }, []);
  
  return (
    <Box className={classes.rootContainer}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Box width={"25%"} className={classes.loginContainer}>
          <LoginContent />
        </Box>
      </Grid>
    </Box>
  );
};

export default LoginPage;
