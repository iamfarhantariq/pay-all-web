import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import Header from "../../components/Common/Header";
import { PROJECT_NAME } from "../../constants/strings";
import BillsList from "../../components/Dashboard/BillsList";
import LeftSideBar from "../../components/Dashboard/LeftSideBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
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
    <div className={classes.root}>
      <Header />
      <Box width={1} className={classes.containerBox}>
        <Grid container spacing={0}>
          <Grid item lg={2} md={2}>
            <Box style={{ position: "sticky", top: "4rem", width: "100%" }}>
              <LeftSideBar />
            </Box>
          </Grid>
          <Grid item lg md sm={12} xs={12}>
            <BillsList />
          </Grid>
          <Grid item lg={2} md={2}></Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default DashboardPage;
