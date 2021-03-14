import { Route } from "react-router-dom";
import "./App.css";
import { protectedRoutes, authRoutes } from "./routes";
import ProtectedRoute from "./routes/ProtectedRoutes";
import loggedIn from "./utils/loggedIn";

const App = () => {
  return (
    <>
      {loggedIn()
        ? protectedRoutes.map((route, index) => (
            <ProtectedRoute
              isPrivate={true}
              key={index}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))
        : authRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
      {/* {loggedIn() ? (
        protectedRoutes.map((route, index) => (
          <ProtectedRoute
            isPrivate={true}
            key={index}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))
      ) : (
        <Redirect to="/" />
      )} */}
    </>
  );
};

export default App;
