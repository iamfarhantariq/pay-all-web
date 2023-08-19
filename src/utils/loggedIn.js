import cookie from "js-cookie";
import { BEARER_TOKEN } from "../constants/cookies";

const loggedIn = () => {
  if (cookie.get(BEARER_TOKEN)) {
    return true;
  }
  return false;
};

export function getToken() {
  if (cookie.get(BEARER_TOKEN)) {
    return cookie.get(BEARER_TOKEN);
  }
  return "";
}

export default loggedIn;
