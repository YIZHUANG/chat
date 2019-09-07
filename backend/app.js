import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import routers from "./routes";
import config from "./config";


const app = express();

const {  apiVersion } = config;

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());

app.use(`/api/${apiVersion}`, routers);

export default app;
