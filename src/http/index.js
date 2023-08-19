import axios from "axios";
import { getToken } from "../utils/loggedIn";

export const post = (api, data, isMultiPart = false) => {
  const token = getToken();
  let headers = { Authorization: `Bearer ${token}` };
  if (isMultiPart) headers["Content-Type"] = "multipart/form-data";
  return axios.post(api, data, { headers });
};

export const get = (api) => {
  const token = getToken();
  let header = { Authorization: `Bearer ${token}` };
  return axios.get(api, { headers: header });
};

export const put = (api, data, isMultiPart = false) => {
  const token = getToken();
  let headers = { Authorization: `Bearer ${token}` };
  if (isMultiPart) headers["Content-Type"] = "multipart/form-data";
  return axios.put(api, data, { headers });
};

export const remove = (api) => {
  const token = getToken();
  let header = { Authorization: `Bearer ${token}` };
  return axios.delete(api, { headers: header });
};
