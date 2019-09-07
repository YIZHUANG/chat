
require("@babel/register")({
  extends: "./.babelrc",
  ignore: [/node_modules/],
});

module.exports = require("./server.js");
