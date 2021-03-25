import React, { useState } from "react";
import { Box, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cookie from "js-cookie";
import { useFormik } from "formik";
import logo from "../../assets/logo.png";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { TextFieldProps } from "../../utils/defaultProps";
import { BEARER_TOKEN } from "../../constants/cookies";
import { PostButton } from "../Common/PostButton";
import { authenticate } from "../../services/Auth";
import { authSchema } from "../../validation";

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
  const [loading, setLoading] = useState(false);

  const handleClickShowPassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      setLoading(true);
      authenticate(values)
        .then(({ data }) => {
          console.log(data);
          cookie.set(BEARER_TOKEN, data.token);
          setLoading(false);
          handleReset();
          window.location.reload();
        })
        .catch((error) => {
          console.log({ error });
          if (error.response !== undefined && error.response.status === 401) {
            alert("Invalid Email or Password");
          }
          setLoading(false);
        });
    },
    validationSchema: authSchema,
  });

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
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email && touched.email ? true : false}
            helperText={errors.email && touched.email ? errors.email : ""}
            style={{ marginBottom: "0.5rem" }}
          />
          <TextField
            name="password"
            label="Password"
            placeholder="Your Password"
            {...TextFieldProps}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.password && touched.password ? true : false}
            helperText={
              errors.password && touched.password ? errors.password : ""
            }
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
          <PostButton
            text="Login"
            onClick={handleSubmit}
            loading={loading}
            disabled={loading}
          />
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
