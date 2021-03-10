import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#a4be82",
    },
    secondary: {
      main: "#469fcb",
    },
    delete: {
      main: "#cf6679",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#ffe1dc",
    },
  },
});

export default theme;
