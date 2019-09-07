import { channelsService } from "../services";

const getChannels = (_, res) => {
  const channals = channelsService.getChannels();
  res.json(channals);
};

export default { getChannels };
