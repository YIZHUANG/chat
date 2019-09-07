import express from "express";

import channelsController from "../controllers/channelsController";

const channelsRouter = express.Router({ mergeParams: true });
const prefix = "/channels";

channelsRouter.route(`${prefix}`).get((req, res) => {
  return channelsController.getChannels(req, res);
});

export default channelsRouter;
