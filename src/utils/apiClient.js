import axios from "axios";
import { API_BASE_PATH } from "./constants";

const apiClient = axios.create({
  baseURL: API_BASE_PATH,
  responseType: "json"
});

export default apiClient;