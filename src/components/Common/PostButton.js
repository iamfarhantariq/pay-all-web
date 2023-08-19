import { Button, CircularProgress } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  circularProgress: {
    color: theme.palette.primary.main,
    marginRight: 10,
  },
}));

export const PostButton = (props) => {
  const { text, loading, onClick } = props;
  const classes = new useStyles();

  return (
    <div>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        size="large"
        style={{ color: "white" }}
        onClick={onClick}
        {...props}
      >
        {loading && (
          <CircularProgress size={20} className={classes.circularProgress} />
        )}
        {loading ? "Please Wait" : text}
      </Button>
    </div>
  );
};
