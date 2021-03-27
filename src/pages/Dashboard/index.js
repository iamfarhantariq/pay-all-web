import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import Header from "../../components/Common/Header";
import { PROJECT_NAME } from "../../constants/strings";
import BillsList from "../../components/Dashboard/BillsList";

const useStyles = makeStyles((theme) => ({
  containerBox: {
    marginTop: "4rem",
  },
}));

const DashboardPage = () => {
  const classes = new useStyles();
  useEffect(() => {
    document.title = PROJECT_NAME;
  }, []);
  return (
    <>
      <Header />
      <Box width={1} className={classes.containerBox}>
        <Grid container>
          <Grid item lg={2} md={2}></Grid>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <BillsList />
          </Grid>
          <Grid item lg={2} md={2}></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DashboardPage;
