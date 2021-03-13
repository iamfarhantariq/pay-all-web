const path = () => {
  if (window.location.pathname === "/register-user/organization") {
    return "organization";
  }
  return "personal";
};

export default path;
