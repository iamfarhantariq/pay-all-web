import React from "react";
import { Route, Redirect } from "react-router-dom";
import loggedIn from "../../utils/loggedIn";

export default function ProtectedRoute({
  component: Component,
  isPrivate,
  ...rest
}) {
  if (isPrivate && !loggedIn()) {
    return <Redirect from={rest.path} to="/" />;
  }
  return <Route {...rest} component={Component} />;
}
