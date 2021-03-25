import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../components/Common/Header";
import { BACKGROUND_COLOR } from "../../constants/colors";
import TitleHeader from "../../components/Auth/RegisterForm/TitleHeader";
import path from "../../utils/urlPath";
import { useFormik } from "formik";
import AccountInfo from "../../components/Auth/RegisterForm/AccountInfo";
import OtherInfo from "../../components/Auth/RegisterForm/AddressCompany";
import OwnwerStructure from "../../components/Auth/RegisterForm/OwnerStructure";
import AcceptTerms from "../../components/Auth/RegisterForm/AcceptTerms";
import SideContainer from "../../components/Auth/RegisterForm/SideContainer";
import { organizationSchema, personalSchema } from "../../validation";
import { registerUser } from "../../services/Auth";
import { BEARER_TOKEN, USER_REF } from "../../constants/cookies";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setSnackbar } from "../../redux/actions/snackBar";

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
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = `Register ${path()}`;
  }, []);

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
      firstName: "",
      surName: "",
      email: "",
      password: "",
      phoneNumber: "",
      dateOfBirth: "",
      address: "",
      houseNumber: "",
      city: "",
      type: path(),
      companyWebsite: "",
      country: "",
      postalCode: "",
      foundUsBy: "",
      ownerStructure: "",
      pep: false,
      companyName: "",
      companyNumber: "",
      mainIndustry: "",
    },
    onSubmit: (values) => {
      setLoading(true);
      registerUser(values)
        .then(({ data }) => {
          console.log(data);
          Cookies.set(BEARER_TOKEN, data.token);
          Cookies.set(USER_REF, data.user._id);
          dispatch(setSnackbar(true, "success", "Successfully Registered!"));
          setLoading(false);
          handleReset();
          window.location.replace("/");
        })
        .catch((error) => {
          console.log({ error });
          if (error && error.response.status === 422) {
            alert("Email Exists");
          }
          setLoading(false);
        });
    },
    validationSchema:
      path() === "organization" ? organizationSchema : personalSchema,
  });

  const prop = {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
  };

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
                  <AccountInfo {...prop} />
                  <OtherInfo {...prop} />
                  <OwnwerStructure {...prop} />
                  <AcceptTerms
                    {...prop}
                    handleSubmit={handleSubmit}
                    loading={loading}
                  />
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
