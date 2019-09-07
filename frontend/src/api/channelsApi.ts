import { axiosClient } from "../modules/apiClient";
import routes from "./routes";

const getChannels = () => {
  return axiosClient.get(routes.channels());
};


export { getChannels };
