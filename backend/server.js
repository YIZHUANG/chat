import app from "./app";
import config from "./config";

const { isProd } = config;
const PORT = isProd ? 80 : config.port;

app.listen(PORT, () => console.log(`Running at port ${PORT}`));
