import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { authRoutes } from "./routes/Auth";
import loggedIn from "./utils/loggedIn";
import theme from "./theme";
import { Box } from "@material-ui/core";

ReactDOM.render(
  // <Box width={1} height={1}>
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        {authRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
        {loggedIn() ? <App /> : <Redirect to="/" />}
      </Switch>
    </Router>
  </ThemeProvider>,
  // </Box>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
