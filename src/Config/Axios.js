import axios from "axios";

const axiosWithBase = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export { axiosWithBase };
