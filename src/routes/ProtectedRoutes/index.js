import React from "react";
import { Route, Redirect } from "react-router-dom";
import { protectedRoutes } from "..";
import loggedIn from "../../utils/loggedIn";

export default function ProtectedRoute({
  component: Component,
  isPrivate,
  ...rest
}) {
  if (isPrivate && !loggedIn()) {
    return <Redirect from={rest.path} to="/" />;
  }
  if (
    loggedIn() &&
    protectedRoutes.findIndex((route) => route.path === rest.path) === -1
  ) {
    return <Redirect from={rest.path} to="/" />;
  }
  return <Route {...rest} component={Component} />;
}
