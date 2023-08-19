import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  rootContainer: {
    width: "100%",
    height: "100vh",
    backgroundColor: theme.palette.background.default,
  },
  loginContainer: {
    padding: "32px 48px",
    backgroundColor: "white",
    margin: "7rem 0"
  },
}));
