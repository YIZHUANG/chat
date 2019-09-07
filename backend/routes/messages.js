import express from "express";

import messagesController from "../controllers/messagesController";

const messagesRouter = express.Router({ mergeParams: true });
const prefix = "/messages";

messagesRouter.route(`${prefix}/:channelId`).get((req, res) => {
  return messagesController.getAllMessages(req, res);
});
messagesRouter.route(`${prefix}/:channelId`).post((req, res) => {
  return messagesController.sendMessage(req, res);
});

export default messagesRouter;
