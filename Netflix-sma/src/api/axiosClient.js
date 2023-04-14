import axios from "axios";
import { apiConfig } from "./apiconfig";
import queryString from "query-string";

export const axiosApi = axios.create({
  baseURL: apiConfig.baseurl,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) =>
    queryString.stringify({ ...params, api_key: apiConfig.apikey }),
});

axiosApi.interceptors.request.use(async (config) => config);
axiosApi.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    throw error;
  }
);
