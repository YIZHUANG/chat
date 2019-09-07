import axios from "axios";

import { backendUrl } from "../constants";

export const axiosClient = axios.create({
  baseURL: backendUrl,
});
