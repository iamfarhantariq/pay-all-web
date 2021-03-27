import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Divider, Grid, Typography } from "@material-ui/core";
import { NAV_BAR_COLOR } from "../../constants/colors";
import DateRangeIcon from "@material-ui/icons/DateRange";
import GetAppIcon from "@material-ui/icons/GetApp";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    fontFamily: "Roboto",
    color: NAV_BAR_COLOR,
    fontWeight: 500,
    fontSize: 16,
  },
  outerBox: {
    padding: "1rem",
    backgroundColor: "white",
  },
  bodyText1: {
    fontFamily: "Roboto",
    color: "white",
    lineHeight: 1,
    textAlign: "center",
    fontSize: 15,
    fontWeight: 400,
    letterSpacing: 0,
  },
  bodyText2: {
    fontFamily: "Roboto",
    color: NAV_BAR_COLOR,
    whiteSpace: "nowrap",
    fontWeight: 300,
  },
}));

const ListItem = () => {
  const classes = new useStyles();

  return (
    <div className={classes.root}>
      <Divider />
      <Box
        minWidth={"360px"}
        style={{
          padding: "0.5rem",
          cursor: "pointer",
          backgroundColor: "white",
        }}
      >
        <Grid container spacing={1}>
          <Grid item lg={1} md={1} sm={1} xs={2}>
            <Box
              style={{
                display: "block",
                backgroundColor: "#8cc152",
                padding: "0.5rem 1rem",
                maxWidth: "2.8rem",
              }}
            >
              <Typography className={classes.bodyText1}>Tue</Typography>
              <Typography
                style={{ fontWeight: 600, fontSize: 19 }}
                className={classes.bodyText1}
              >
                23
              </Typography>
              <Typography className={classes.bodyText1}>Dec</Typography>
            </Box>
          </Grid>
          <Grid item lg md sm xs>
            <Box style={{ display: "block" }}>
              <Typography
                variant="h4"
                className={classes.bodyText2}
                style={{
                  fontSize: "1.1em",
                  fontWeight: 400,
                  lineHeight: "1.3em",
                }}
              >
                MOOVAHOME LIMITED
              </Typography>
              <Typography className={classes.bodyText2}>
                40-43-35 11410628
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={1} md={1} sm={1} xs={2} justify="flex-end">
            <Typography
              variant="h3"
              className={classes.title}
              style={{
                fontSize: "1.2em",
                fontWeight: "bold",
                lineHeight: "1.1",
                margin: "0.5rem 0.5rem",
              }}
            >
              £875
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

const BillsList = () => {
  const classes = new useStyles();

  return (
    <div className={classes.root}>
      <Box
        minWidth={"360px"}
        className={classes.outerBox}
        style={{ position: "sticky", top: "4rem", maxWidth: "96.7%" }}
      >
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Typography variant="h4" className={classes.title}>
            Paid
          </Typography>
          <Box>
            <Button
              variant="outlined"
              size="small"
              startIcon={<DateRangeIcon />}
            >
              Date
            </Button>
            <Button
              variant="outlined"
              size="small"
              startIcon={<GetAppIcon />}
              style={{ marginLeft: "0.5rem" }}
            >
              Export
            </Button>
          </Box>
        </Grid>
      </Box>
      <Box>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </Box>
    </div>
  );
};

export default BillsList;
