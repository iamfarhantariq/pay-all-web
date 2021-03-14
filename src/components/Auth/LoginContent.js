import React, { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cookie from "js-cookie";
import logo from "../../assets/logo.png";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { TextFieldProps } from "../../utils/defaultProps";
import { BEARER_TOKEN } from "../../constants/cookies";

const useStyles = makeStyles((theme) => ({
  bottomText: {
    color: "#666",
    fontSize: 12,
    fontFamily: "Roboto",
    lineHeight: 1.5,
    marginTop: "0.5rem",
    cursor: "pointer",
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

  const handleSignin = () => {
    cookie.set(BEARER_TOKEN, "sjdfhgaskdjfkjsadf");
    window.location.assign("/");
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
        <Grid item>
          <img src={logo} alt="logo" height="130px" />
        </Grid>
        <Grid item>
          <TextField
            name="email"
            label="Email"
            placeholder="john@example.com"
            {...TextFieldProps}
            style={{ marginBottom: "0.5rem" }}
          />
          <TextField
            name="password"
            label="Password"
            placeholder="Your Password"
            {...TextFieldProps}
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
            style={{ marginBottom: "1rem" }}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            style={{ color: "white" }}
            onClick={handleSignin}
          >
            Login
          </Button>
        </Grid>
        <Grid item>
          <Box>
            <Typography variant="body2" className={classes.bottomText}>
              I have forgotten my details
            </Typography>
            <Typography
              variant="body2"
              className={classes.bottomText}
              onClick={() => window.location.assign("/register-user")}
            >
              No account? Get one now
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginContent;
