import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Divider, Grid, Typography } from "@material-ui/core";
import { NAV_BAR_COLOR } from "../../constants/colors";
import DateRangeIcon from "@material-ui/icons/DateRange";
import GetAppIcon from "@material-ui/icons/GetApp";

const useStyles = makeStyles((theme) => ({
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
    <>
      <Divider />
      <Box minWidth={"360px"} style={{ padding: "0.5rem", cursor: "pointer" }}>
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
    </>
  );
};

const BillsList = () => {
  const classes = new useStyles();

  return (
    <>
      <Box
        minWidth={"360px"}
        width={"100%"}
        className={classes.outerBox}
        style={{ position: "fixed" }}
      >
        <Grid container alignItems="center" spacing={1}>
          <Grid item lg md sm xs>
            <Typography variant="h4" className={classes.title}>
              Paid
            </Typography>
          </Grid>
          <Grid item lg md sm xs>
            <Box
              width="100%"
              justify="flex-end"
              display="flex"
              margin="0 1.5rem"
            >
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
        </Grid>
      </Box>
      <Box style={{ marginTop: "4rem" }}>
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
    </>
  );
};

export default BillsList;
