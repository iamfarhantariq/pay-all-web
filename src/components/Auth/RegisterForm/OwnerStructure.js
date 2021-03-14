import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Box,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NAV_BAR_COLOR } from "../../../constants/colors";
import path from "../../../utils/urlPath";
import { PROJECT_NAME } from "../../../constants/strings";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Roboto",
    color: NAV_BAR_COLOR,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: "1rem",
    fontSize: "24px",
  },
  description: {
    fontFamily: "Roboto",
    color: NAV_BAR_COLOR,
    fontWeight: 400,
    lineHeight: 1.4,
  },
}));

const OChoices = [
  {
    id: 1,
    name: "100% of the business is owned by myself",
  },
  {
    id: 2,
    name:
      "The business has several owners, but no individual owns more than 25% directly or indirectly or has a significant influence",
  },
  {
    id: 3,
    name:
      "The business has one or several owners that each, directly or indirectly, own more than 25% of the company or have a significant influence",
  },
];

const PChoices = [
  {
    id: 1,
    name: "Colleague or friend",
  },
  {
    id: 2,
    name: "Google Search or similar",
  },
  {
    id: 3,
    name: "Article or similar news media",
  },
  {
    id: 4,
    name: "I have a referral code",
  },
  {
    id: 5,
    name: "Other",
  },
];

const OwnwerStructure = () => {
  const classes = new useStyles();
  const [value, setValue] = useState("");
  const [choices, setChoices] = useState([]);

  useEffect(() => {
    path() === "organization" ? setChoices(OChoices) : setChoices(PChoices);
  }, []);

  return (
    <Box style={{ padding: "2rem", backgroundColor: "white" }}>
      <Grid container direction="row" spacing={2}>
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <Box width={1}>
            <Typography variant="h3" className={classes.title}>
              {path() === "organization"
                ? "3. Owner structure"
                : `3. How did you find out about ${PROJECT_NAME}? (Optional question)`}
            </Typography>

            {path() === "organization" ? (
              <Typography variant="body2" className={classes.description}>
                In order to register your account we need to know if there are
                any individuals that have a significant influence over the
                business. By this we mean if there are any individuals that
                individually can make significant decisions concerning the
                company.
              </Typography>
            ) : (
              <Typography variant="body2" className={classes.description}>
                {`If you want you can tell us how you found out about ${PROJECT_NAME}. It
                helps us improve our service and make it more efficient.`}
              </Typography>
            )}
          </Box>
        </Grid>
        <Grid item container md={9} sm={12} xs={12}>
          <Box width={1}>
            <RadioGroup
              name="choice"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            >
              {choices.map((choice, index) => {
                return (
                  <FormControlLabel
                    value={choice.name}
                    control={<Radio color="secondary" />}
                    label={choice.name}
                    key={index}
                  />
                );
              })}
            </RadioGroup>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OwnwerStructure;
