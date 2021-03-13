import React, { useEffect, useState } from "react";
import { Container, Grid, Hidden, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BusinessImage from "../../../assets/business.svg";
import PrivateImage from "../../../assets/private.svg";
import { NAV_BAR_COLOR } from "../../../constants/colors";
import { PROJECT_NAME } from "../../../constants/strings";
import path from "../../../utils/urlPath";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Roboto",
    color: NAV_BAR_COLOR,
    fontWeight: 900,
    lineHeight: 1.1,
    textAlign: "start",
    fontSize: "36px",
  },
  description: {
    fontFamily: "Roboto",
    color: NAV_BAR_COLOR,
    fontWeight: 400,
    lineHeight: 1.4,
    textAlign: "start",
  },
}));

const TitleHeader = () => {
  const classes = new useStyles();

  // const path = () => {
  //   if (window.location.pathname === "/register-user/organization") {
  //     return "organization";
  //   }
  //   return "personal";
  // };

  return (
    <div>
      <Container maxWidth="md">
        <Grid container direction="row" spacing={2}>
          <Hidden only={["sm", "xs"]}>
            <Grid item lg={2} md={2}>
              <img
                src={path() === "organization" ? BusinessImage : PrivateImage}
                alt=""
                style={{ maxWidth: "140px", marginBottom: "1rem" }}
              />
            </Grid>
          </Hidden>
          <Grid item container lg={10} md={10} sm={12} xs={12}>
            <Typography variant="h1" className={classes.title}>
              {path() === "organization"
                ? "Register your business"
                : `Create a ${PROJECT_NAME} account`}
            </Typography>
            <Typography variant="body3" className={classes.description}>
              {path() === "organization"
                ? "In order to use Billhop you need to register your business with us using the form below."
                : `To get started with ${PROJECT_NAME}, you have to register an account. Enter your e-mail and choose a password and identify yourself by entering your official address.`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TitleHeader;
