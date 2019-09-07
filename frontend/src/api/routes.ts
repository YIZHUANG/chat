import { apiVersion } from "../constants";

const prefix = `/api/${apiVersion}`;
const routes = {
  channels: () => `${prefix}/channels`,
  channel: (channelId: string) => `${prefix}/messages/${channelId}`,
  messages: (channelId: string) => `${prefix}/messages/${channelId}`,
};
export default routes;
