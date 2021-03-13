import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../components/Common/Header";
import {
  BACKGROUND_COLOR,
  NAV_BAR_COLOR,
  PRIMARY_COLOR,
} from "../../constants/colors";
import TitleHeader from "../../components/Auth/RegisterForm/TitleHeader";
import path from "../../utils/urlPath";

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

const RegisterForm = () => {
  const classes = new useStyles();

  useEffect(() => {
    document.title = `Register ${path()}`;
  }, []);

  return (
    <>
      <Box width={1}>
        <Header />
        <Box width={1} className={classes.headingBox}>
          <TitleHeader />
        </Box>
        <Box width={1}></Box>
      </Box>
    </>
  );
};

export default RegisterForm;
