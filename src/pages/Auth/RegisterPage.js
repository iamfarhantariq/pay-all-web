import React, { useEffect } from "react";
import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../components/Common/Header";
import {
  BACKGROUND_COLOR,
  NAV_BAR_COLOR,
  PRIMARY_COLOR,
} from "../../constants/colors";
import {
  COMPANY_DESCRIPTION,
  PROJECT_NAME,
  WELCOME_DESCRIPTION,
} from "../../constants/strings";
import BusinessImage from "../../assets/business.svg";
import PrivateImage from "../../assets/private.svg";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Roboto",
    color: NAV_BAR_COLOR,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: "1rem",
  },
  description: {
    fontFamily: "Roboto",
    color: NAV_BAR_COLOR,
    fontWeight: 400,
    lineHeight: 1.4,
  },
  headingBox: {
    backgroundColor: BACKGROUND_COLOR,
    padding: "3rem 0",
    marginTop: "4rem",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  containerBox: {
    margin: "2rem",
    display: "block",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: PRIMARY_COLOR,
    "&:hover": {
      background: "#98b571",
    },
    padding: "0.5rem 0",
    margin: "1rem 0",
    cursor: "pointer",
  },
  bottomButton: {
    color: "white",
    float: "center",
    display: "block",
    margin: "0 auto",
    marginBottom: "3rem",
  },
}));

const RegisterPage = () => {
  const classes = new useStyles();
  useEffect(() => {
    document.title = "Register";
  }, []);

  const handleClick = (type) => {
    return window.location.assign(
      type === "organization"
        ? "/register-user/organization"
        : "/register-user/personal"
    );
  };

  return (
    <>
      <Box width={1}>
        <Header />
        <Box width={1} className={classes.headingBox}>
          <Container maxWidth="sm">
            <Box>
              <Typography
                variant="h1"
                className={classes.title}
                style={{ fontSize: "36px" }}
              >
                {`Welcome to ${PROJECT_NAME}`}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body3" className={classes.description}>
                {WELCOME_DESCRIPTION}
              </Typography>
            </Box>
          </Container>
        </Box>
        <Box width={1}>
          <Container maxWidth="md">
            <Grid container>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box className={classes.containerBox}>
                  <img
                    src={BusinessImage}
                    alt=""
                    style={{ maxWidth: "140px", marginBottom: "1rem" }}
                  />
                  <Typography
                    variant="h3"
                    className={classes.title}
                    style={{ fontSize: "24px" }}
                  >
                    Register a company
                  </Typography>
                  <Typography variant="body4" className={classes.description}>
                    {COMPANY_DESCRIPTION}
                  </Typography>
                  <Box
                    className={classes.card}
                    onClick={() => handleClick("organization")}
                  >
                    <Typography
                      variant="subtitle1"
                      className={classes.description}
                      style={{
                        color: "white",
                      }}
                    >
                      Register a company
                    </Typography>
                    <Typography
                      variant="body2"
                      className={classes.description}
                      style={{
                        color: "white",
                      }}
                    >
                      With company number
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box className={classes.containerBox}>
                  <img
                    src={PrivateImage}
                    alt=""
                    style={{ maxWidth: "140px", marginBottom: "1rem" }}
                  />
                  <Typography
                    variant="h3"
                    className={classes.title}
                    style={{ fontSize: "24px" }}
                  >
                    Register a private individual
                  </Typography>
                  <Typography variant="body4" className={classes.description}>
                    {COMPANY_DESCRIPTION}
                  </Typography>
                  <Box
                    className={classes.card}
                    onClick={() => handleClick("personal")}
                  >
                    <Typography
                      variant="subtitle1"
                      className={classes.description}
                      style={{
                        color: "white",
                      }}
                    >
                      Register a private account
                    </Typography>
                    <Typography
                      variant="body2"
                      className={classes.description}
                      style={{
                        color: "white",
                      }}
                    >
                      With date of birth
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          className={classes.bottomButton}
        >
          Help me choose
        </Button>
      </Box>
    </>
  );
};

export default RegisterPage;
