import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Box,
  FormControlLabel,
  Checkbox,
  Divider,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NAV_BAR_COLOR } from "../../../constants/colors";
import path from "../../../utils/urlPath";
import { PROJECT_NAME } from "../../../constants/strings";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";

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
    margin: "1rem 0",
  },
  description2: {
    fontFamily: "Roboto",
    color: NAV_BAR_COLOR,
    fontWeight: 400,
    lineHeight: 1.4,
  },
  bottomButton: {
    color: "white",
  },
}));

const AcceptTerms = () => {
  const classes = new useStyles();
  const [accept, setAccept] = useState(false);
  const [pep, setPep] = useState(null);

  return (
    <Box style={{ padding: "2rem", backgroundColor: "white" }}>
      <Grid container direction="row" spacing={2}>
        <Grid item lg={9} xs={12}>
          <Box width={1}>
            <Typography variant="h3" className={classes.title}>
              {path() === "organization"
                ? "4. Ready to sign"
                : "4. Accept terms"}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          {path() === "organization" ? (
            <Box width={1}>
              <FormControlLabel
                value={accept}
                control={
                  <Checkbox
                    color="seconday"
                    checked={accept}
                    onChange={(event) => setAccept(event.target.checked)}
                  />
                }
                label={`I have read, understood and accept ${PROJECT_NAME}’s Terms of Service. In case I register as a sole trader, I confirm that I am not representing anyone but myself.`}
              />
              <Typography variant="body2" className={classes.description}>
                We are keen to protect the privacy of our registered users and
                of the visitors of our website! Please read our Privacy Policy
                carefully.
              </Typography>
              <Divider />
              <Typography variant="body2" className={classes.description}>
                By clicking the "Register my business" button I confirm that I
                am an authorised signatory of the company and as such have the
                legal authority to create an account on behalf of the company,
                and that the information I have given is valid and truthful.
              </Typography>
            </Box>
          ) : (
            <Box width={1}>
              <Typography
                variant="body2"
                className={classes.description2}
                style={{ fontWeight: "bold" }}
              >
                Terms of Service
              </Typography>
              <Typography variant="body2" className={classes.description2}>
                I have read, understood and accept Billhop’s Terms of Service. I
                further acknowledge that I will use Billhop’s services for
                private purposes, and that I do not represent anyone but myself.
              </Typography>
              <Button
                variant={accept ? "contained" : "outlined"}
                color={accept ? "primary" : "secondary"}
                size="small"
                startIcon={<ThumbUpIcon />}
                style={{ marginTop: "0.5rem" }}
                onClick={() => setAccept(!accept)}
              >
                I accept the terms
              </Button>

              <Typography
                variant="body2"
                className={classes.description2}
                style={{ fontWeight: "bold", marginTop: "1rem" }}
              >
                PEP
              </Typography>
              <Typography variant="body2" className={classes.description2}>
                I hold or have held a political or governmental position (PEP).
                Read more about PEP
              </Typography>
              <Box width={1} style={{ display: "inline-flex" }}>
                <Button
                  variant={!pep && pep !== null ? "contained" : "outlined"}
                  color={!pep && pep !== null ? "primary" : "secondary"}
                  size="small"
                  startIcon={<CloseIcon />}
                  style={{ marginTop: "0.5rem", marginRight: "0.5rem" }}
                  onClick={() => setPep(false)}
                >
                  No, I'm not PEP
                </Button>
                <Button
                  variant={pep && pep !== null ? "contained" : "outlined"}
                  color={pep && pep !== null ? "primary" : "secondary"}
                  size="small"
                  startIcon={<CheckIcon />}
                  style={{ marginTop: "0.5rem" }}
                  onClick={() => setPep(true)}
                >
                  Yes, I'm PEP
                </Button>
              </Box>

              <Typography
                variant="body2"
                className={classes.description2}
                style={{ marginTop: "1rem" }}
              >
                We are keen to protect the privacy of our registered users and
                of the visitors of our website! Please read our Privacy Policy
                carefully
              </Typography>
            </Box>
          )}
        </Grid>
        <Grid item xs={12}>
          <Box width={1}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              style={{ color: "white" }}
            >
              {path() === "organization"
                ? "Register my business"
                : "Register account"}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AcceptTerms;
