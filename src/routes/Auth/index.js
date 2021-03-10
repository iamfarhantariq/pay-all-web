import LoginPage from "../../pages/Auth/LoginPage";
import RegisterPage from "../../pages/Auth/RegisterPage";
import Page404 from "../../pages/Page404";

export const authRoutes = [
  {
    path: "/",
    component: LoginPage,
    exact: true,
  },
  {
    path: "/register-user",
    component: RegisterPage,
    exact: true,
  },
  {
    path: "*",
    component: Page404,
    exact: true,
  },
];
