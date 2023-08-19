import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BACKGROUND_COLOR, NAV_BAR_COLOR } from "../../../constants/colors";
import path from "../../../utils/urlPath";
import { PROJECT_NAME } from "../../../constants/strings";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Roboto",
    color: NAV_BAR_COLOR,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: "1rem",
    fontSize: "20px",
  },
  description: {
    fontFamily: "Roboto",
    color: NAV_BAR_COLOR,
    fontWeight: 400,
    lineHeight: 1.4,
    marginBottom: "0.5rem",
    cursor: "pointer",
  },
  containerBox: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  containerDescription: {
    fontFamily: "Roboto",
    color: NAV_BAR_COLOR,
    lineHeight: 1.4,
    fontSize: "12px",
    fontWeight: "bold",
  },
}));

const SideContainer = () => {
  const classes = new useStyles();

  return (
    <Box
      style={{
        padding: "2rem",
        top: "4rem",
        position: "sticky",
      }}
    >
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Box width={1} style={{marginLeft: "1rem"}}>
            <Typography variant="h4" className={classes.title}>
              Four simple steps
            </Typography>
            <Typography variant="body2" className={classes.description}>
              1. Personal details
            </Typography>
            <Typography variant="body2" className={classes.description}>
              {path() === "organization"
                ? "2. Company details"
                : "2. Individual details"}
            </Typography>
            <Typography variant="body2" className={classes.description}>
              {path() === "organization"
                ? "3. Owner structure"
                : `3. How did you find out about ${PROJECT_NAME}?`}
            </Typography>
            <Typography variant="body2" className={classes.description}>
              {path() === "organization"
                ? "4. Ready to sign"
                : "4. Accept terms"}
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            width={1}
            style={{ backgroundColor: BACKGROUND_COLOR, padding: "1rem" }}
          >
            <Typography variant="h4" className={classes.title}>
              Do you need assistance?
            </Typography>
            <Box className={classes.containerBox}>
              <PhoneIcon fontSize="small" />
              <span
                className={classes.description}
                style={{
                  fontSize: 14,
                  marginLeft: "0.5rem",
                  paddingTop: "0.5rem",
                }}
              >
                020 3868 3439
              </span>
            </Box>
            <Box className={classes.containerBox}>
              <EmailIcon fontSize="small" />
              <span
                className={classes.description}
                style={{
                  fontSize: 14,
                  marginLeft: "0.5rem",
                  paddingTop: "0.5rem",
                }}
              >
                {`help@${PROJECT_NAME}.co.uk`}
              </span>
            </Box>
            <Typography
              variant="body1"
              className={classes.containerDescription}
            >
              Weekdays
            </Typography>
            <Typography
              variant="body1"
              className={classes.containerDescription}
            >
              8-11:30 am
            </Typography>
            <Typography
              variant="body1"
              className={classes.containerDescription}
            >
              12:30-4 pm
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SideContainer;
