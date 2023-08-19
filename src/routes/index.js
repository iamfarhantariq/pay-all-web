import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";
import RegisterForm from "../pages/Auth/RegisterForm";
import DashboardPage from "../pages/Dashboard";

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
    path: "/pay-all-web",
    component: RegisterPage,
    exact: true,
  },
  {
    path: "/register-user/organization",
    component: RegisterForm,
    exact: true,
  },
  {
    path: "/register-user/personal",
    component: RegisterForm,
    exact: true,
  },
];

export const protectedRoutes = [
  {
    path: "/",
    component: DashboardPage,
    exact: true,
  },
  {
    path: "/pay-all-web",
    component: DashboardPage,
    exact: true,
  }
];

