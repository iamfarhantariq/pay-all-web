import React, { useEffect } from "react";
import { Box, Container, Grid, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../components/Common/Header";
import { BACKGROUND_COLOR } from "../../constants/colors";
import TitleHeader from "../../components/Auth/RegisterForm/TitleHeader";
import path from "../../utils/urlPath";
import AccountInfo from "../../components/Auth/RegisterForm/AccountInfo";
import OtherInfo from "../../components/Auth/RegisterForm/AddressCompany";
import OwnwerStructure from "../../components/Auth/RegisterForm/OwnerStructure";
import AcceptTerms from "../../components/Auth/RegisterForm/AcceptTerms";
import SideContainer from "../../components/Auth/RegisterForm/SideContainer";

const useStyles = makeStyles((theme) => ({
  headingBox: {
    backgroundColor: BACKGROUND_COLOR,
    padding: "3rem 0",
    marginTop: "4rem",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const RegisterForm = () => {
  const classes = new useStyles();

  useEffect(() => {
    document.title = `Register ${path()}`;
  }, []);

  return (
    <>
      <Box width={1} style={{ backgroundColor: "#f9f9f9" }}>
        <Header />
        <Box width={1} className={classes.headingBox}>
          <TitleHeader />
        </Box>
        <Box width={1}>
          <Container maxWidth="lg">
            <Grid container spacing={1} direction="row">
              <Grid item lg={9} md={12}>
                <Box style={{}}>
                  <AccountInfo />
                  <OtherInfo />
                  <OwnwerStructure />
                  <AcceptTerms />
                </Box>
              </Grid>
              <Hidden only={["md", "sm", "xs"]}>
                <Grid item lg={3}>
                  <SideContainer />
                </Grid>
              </Hidden>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default RegisterForm;
