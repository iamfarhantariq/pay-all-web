import React from "react";
import { Grid, Typography, Box, TextField, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NAV_BAR_COLOR } from "../../../constants/colors";
import path from "../../../utils/urlPath";
import { TextFieldProps } from "../../../utils/defaultProps";
import industries from "../../../constants/industries";

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
      Enter your address as stated in the official registers. Do not use
      abbreviations and make sure to check for spelling errors.
    </Typography>
  );
};

const OrganizationDescription = () => {
  const classes = new useStyles();
  return (
    <Typography variant="body2" className={classes.description}>
      In order for us to register your business we need some information. All
      information is kept strictly confidential. If you are a sole trader,
      please register as a private individual or contact us at help@payall.co.uk
      You will only need to submit this information once
    </Typography>
  );
};

const OtherInfo = () => {
  const classes = new useStyles();

  return (
    <Box style={{ padding: "2rem", backgroundColor: "white" }}>
      <Grid container direction="row" spacing={2}>
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <Box width={1}>
            <Typography variant="h3" className={classes.title}>
              {path() === "organization"
                ? "2. Company details"
                : "2. Individual details"}
            </Typography>
            {path() === "organization" ? (
              <OrganizationDescription />
            ) : (
              <PersonalDescription />
            )}
          </Box>
        </Grid>
        <Grid item container md={9} sm={12} xs={12}>
          {path() === "organization" && (
            <Box width={1}>
              <TextField
                name="companyName"
                label="Company Name"
                placeholder="Company Name"
                {...TextFieldProps}
              />
              <TextField
                name="companyNumber"
                label="Company Number"
                placeholder="Company Number"
                {...TextFieldProps}
              />
              <TextField
                name="mainIndustry"
                label="Main Industry"
                placeholder="Choose industry"
                select
                {...TextFieldProps}
              >
                {industries.map((industry) => {
                  return (
                    <MenuItem key={industry.id} value={industry.name}>
                      {industry.name}
                    </MenuItem>
                  );
                })}
              </TextField>
              <TextField
                name="companyWebsite"
                label="Company Website"
                placeholder="www.the-website.com"
                {...TextFieldProps}
              />
            </Box>
          )}
          <Box width={1} style={{ display: "inline-flex" }}>
            <TextField
              name="postcode"
              label="Postcode"
              placeholder="Postcode"
              {...TextFieldProps}
              style={{ marginRight: "1rem" }}
            />
            <TextField
              name="houseNumber"
              label="House Number"
              placeholder="House Number"
              {...TextFieldProps}
            />
          </Box>
          <Box width={1}>
            <TextField
              name="address"
              label="Address"
              placeholder="Address"
              {...TextFieldProps}
            />
          </Box>
          <Box width={1} style={{ display: "inline-flex" }}>
            <TextField
              name="city"
              label="City"
              placeholder="City"
              {...TextFieldProps}
              style={{ marginRight: "1rem" }}
            />
            <TextField
              name="country"
              label="Country"
              placeholder="Country"
              {...TextFieldProps}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OtherInfo;
