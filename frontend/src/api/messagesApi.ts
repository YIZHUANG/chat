import { axiosClient } from "../modules/apiClient";
import routes from "./routes";

const getMessages = (channelId: string) => {
  return axiosClient.get(routes.messages(channelId));
};
const sendMessage = (message: {
  username: string;
  text: string;
  channelId: string;
}) => {
  return axiosClient.post(routes.channel(message.channelId), {
    message,
  });
};
export { getMessages, sendMessage };
