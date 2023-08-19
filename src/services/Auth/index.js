import axios from "axios";
import { API_POST_REGISTER_USER, API_POST_LOGIN } from "../../apis/auth";

export const registerUser = (values) => {
  return axios.post(API_POST_REGISTER_USER, values, false);
};

export const authenticate = (values) => {
  return axios.post(API_POST_LOGIN, values, false);
};
