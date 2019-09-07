const isProd = process.env.REACT_APP_ENVIRONMENT === "production";
const backendUrl = process.env.REACT_APP_BACKEND_URL;
const apiVersion = "v1";
const PULL_MESSAGE = "PULL_MESSAGE";

export { isProd, backendUrl, apiVersion, PULL_MESSAGE };
