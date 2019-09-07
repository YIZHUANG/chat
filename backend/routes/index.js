import express from "express";

import channelsRouter from "./channels";
import messagesRouter from "./messages";

const routers = express.Router();

routers.use(channelsRouter);
routers.use(messagesRouter);

export default routers;
