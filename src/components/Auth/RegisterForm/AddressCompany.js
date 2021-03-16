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

const OtherInfo = (props) => {
  const { values, errors, touched, handleChange, handleBlur } = props;

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
                value={values.companyName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.companyName && touched.companyName ? true : false}
                helperText={
                  errors.companyName && touched.companyName
                    ? errors.companyName
                    : ""
                }
              />
              <TextField
                name="companyNumber"
                label="Company Number"
                placeholder="Company Number"
                {...TextFieldProps}
                value={values.companyNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  errors.companyNumber && touched.companyNumber ? true : false
                }
                helperText={
                  errors.companyNumber && touched.companyNumber
                    ? errors.companyNumber
                    : ""
                }
              />
              <TextField
                name="mainIndustry"
                label="Main Industry"
                placeholder="Choose industry"
                select
                {...TextFieldProps}
                value={values.mainIndustry}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  errors.mainIndustry && touched.mainIndustry ? true : false
                }
                helperText={
                  errors.mainIndustry && touched.mainIndustry
                    ? errors.mainIndustry
                    : ""
                }
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
                value={values.companyWebsite}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  errors.companyWebsite && touched.companyWebsite ? true : false
                }
                helperText={
                  errors.companyWebsite && touched.companyWebsite
                    ? errors.companyWebsite
                    : ""
                }
              />
            </Box>
          )}
          <Box width={1} style={{ display: "inline-flex" }}>
            <TextField
              name="postalCode"
              label="Postcode"
              placeholder="PostalCode"
              {...TextFieldProps}
              value={values.postalCode}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.postalCode && touched.postalCode ? true : false}
              helperText={
                errors.postalCode && touched.postalCode ? errors.postalCode : ""
              }
              style={{ marginRight: "1rem" }}
            />
            <TextField
              name="houseNumber"
              label="House Number"
              placeholder="House Number"
              {...TextFieldProps}
              value={values.houseNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.houseNumber && touched.houseNumber ? true : false}
              helperText={
                errors.houseNumber && touched.houseNumber
                  ? errors.houseNumber
                  : ""
              }
            />
          </Box>
          <Box width={1}>
            <TextField
              name="address"
              label="Address"
              placeholder="Address"
              {...TextFieldProps}
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.address && touched.address ? true : false}
              helperText={
                errors.address && touched.address ? errors.address : ""
              }
            />
          </Box>
          <Box width={1} style={{ display: "inline-flex" }}>
            <TextField
              name="city"
              label="City"
              placeholder="City"
              {...TextFieldProps}
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.city && touched.city ? true : false}
              helperText={errors.city && touched.city ? errors.city : ""}
              style={{ marginRight: "1rem" }}
            />
            <TextField
              name="country"
              label="Country"
              placeholder="Country"
              {...TextFieldProps}
              value={values.country}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.country && touched.country ? true : false}
              helperText={
                errors.country && touched.country ? errors.country : ""
              }
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OtherInfo;
