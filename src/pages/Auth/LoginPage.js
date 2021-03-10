import React from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "../../styles/default";

const LoginPage = () => {
  let classes = new useStyles();
  return (
    <>
      <Box className={classes.rootContainer}>
          Hello
      </Box>
    </>
  );
};

export default LoginPage;
