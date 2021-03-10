import React, { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/logo.png";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme) => ({
  bottomText: {
    color: "#666",
    fontSize: 12,
    fontFamily: "Roboto",
    lineHeight: 1.5,
    marginTop: "0.5rem",
  },
}));

const LoginContent = () => {
  const classes = new useStyles();
  const [passwordType, setPasswordType] = useState("password");

  const handleClickShowPassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Box>
          <img src={logo} alt="logo" height="80px" />
        </Box>
        <Grid item container>
          <TextField
            fullWidth
            name="email"
            label="Email"
            placeholder="john@example.com"
            variant="outlined"
            color="secondary"
            margin="dense"
          />
        </Grid>
        <Grid item container>
          <TextField
            fullWidth
            name="password"
            label="Password"
            placeholder="Your Password"
            variant="outlined"
            color="secondary"
            margin="dense"
            type={passwordType}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {passwordType === "password" ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item container>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            style={{ color: "white" }}
          >
            Login
          </Button>
        </Grid>
        <Box>
          <Typography variant="body2" className={classes.bottomText}>
            I have forgotten my details
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2" className={classes.bottomText}>
            No account? Get one now
          </Typography>
        </Box>
      </Grid>
    </>
  );
};

export default LoginContent;
