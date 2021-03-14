import React, { useState } from "react";
import { Grid, Typography, Box, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  NAV_BAR_COLOR,
} from "../../../constants/colors";
import { PROJECT_NAME } from "../../../constants/strings";
import path from "../../../utils/urlPath";
import { TextFieldProps } from "../../../utils/defaultProps";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Roboto",
    color: NAV_BAR_COLOR,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: "1rem",
    fontSize: "24px",
  },
  description: {
    fontFamily: "Roboto",
    color: NAV_BAR_COLOR,
    fontWeight: 400,
    lineHeight: 1.4,
  },
}));

const PersonalDescription = () => {
  const classes = new useStyles();
  return (
    <Typography variant="body2" className={classes.description}>
      {`This information is used for your ${PROJECT_NAME} account. You will use this email
      and the password to login to ${PROJECT_NAME}.`}
    </Typography>
  );
};

const OrganizationDescription = () => {
  const classes = new useStyles();
  return (
    <Typography variant="body2" className={classes.description}>
      {`This account will be the first account for your business and as such the account that you will use to login to ${PROJECT_NAME}. If you already have a ${PROJECT_NAME}. account you can, login and register this business through "Settings".`}
    </Typography>
  );
};

const AccountInfo = () => {
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
    <Box style={{ padding: "2rem", backgroundColor: "white" }}>
      <Grid container direction="row" spacing={2}>
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <Box width={1}>
            <Typography variant="h3" className={classes.title}>
              1. Personal details
            </Typography>
            {path() === "organization" ? (
              <OrganizationDescription />
            ) : (
              <PersonalDescription />
            )}
          </Box>
        </Grid>
        <Grid item container md={9} sm={12} xs={12}>
          <Box width={1} style={{ display: "inline-flex" }}>
            <TextField
              name="firstName"
              label="First Name"
              placeholder="John"
              {...TextFieldProps}
              style={{ marginRight: "1rem" }}
            />
            <TextField
              name="surName"
              label="Sur Name"
              placeholder="Murffy"
              {...TextFieldProps}
            />
          </Box>
          <Box width={1}>
            <TextField
              name="email"
              label="Email"
              placeholder="John@example.com"
              {...TextFieldProps}
            />
            <TextField
              name="password"
              label="Choose Password"
              placeholder="My difficult password"
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
            />
            <TextField
              name="phone"
              label="Phone Number"
              placeholder="07400 123456"
              {...TextFieldProps}
            />
            <TextField
              name="dob"
              label={
                path() === "organization"
                  ? "Firm signatory date of birth"
                  : "Date of birth"
              }
              type="date"
              defaultValue="2000-02-15"
              {...TextFieldProps}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AccountInfo;
