import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Box,
  Button,
  Typography,
  Chip,
  TextField,
} from "@material-ui/core";
import { NAV_BAR_COLOR } from "../../constants/colors";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Roboto",
    color: NAV_BAR_COLOR,
    fontWeight: 400,
    fontSize: 16,
    cursor: "pointer",
  },
  outerBox: {
    padding: "1rem",
    backgroundColor: "white",
  },
  tabs: {
    fontFamily: "Roboto",
    color: NAV_BAR_COLOR,
    fontWeight: 400,
    cursor: "pointer",
    fontSize: 16,
    padding: "0.5rem 1rem",
    "&:hover": {
      background: "#f4f4f4",
    },
  },
}));

const LeftSideBar = () => {
  const classes = new useStyles();

  return (
    <>
      <Box display="block">
        <Box p={2} bgcolor="#f9f9f9">
          <Grid container direction="column">
            <Button
              fullwidth
              size="large"
              variant="contained"
              color="primary"
              style={{ color: "white" }}
            >
              Pay
            </Button>
          </Grid>
        </Box>
        <Box bgcolor="#f4f4f4" p={2}>
          <Typography variant="h4" className={classes.title}>
            My bills
          </Typography>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            style={{ marginTop: "1rem" }}
          >
            <Typography
              variant="h4"
              className={classes.title}
              style={{ fontWeight: 300 }}
            >
              Scheduled
            </Typography>
            <Chip
              color="secondary"
              size="small"
              label="0"
              style={{ color: "white" }}
            />
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            style={{ marginTop: "1rem" }}
          >
            <Typography
              variant="h4"
              className={classes.title}
              style={{ fontWeight: 300 }}
            >
              Paid
            </Typography>
            <Chip
              color="secondary"
              size="small"
              label="10"
              style={{ color: "white" }}
            />
          </Grid>
          <TextField
            variant="outlined"
            size="small"
            placeholder="search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
            style={{ marginTop: "1rem" }}
          />
        </Box>
        <Box pb={"1rem"} bgcolor="#f9f9f9">
          <Typography variant="h4" className={classes.tabs}>
            Setting
          </Typography>
          <Typography variant="h4" className={classes.tabs}>
            Support
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default LeftSideBar;
