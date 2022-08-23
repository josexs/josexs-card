const { render } = require("prettyjson");
const data = require("./lib/data");

const renderOpts = {
  keysColor: "red",
  stringColor: "white",
};

module.exports = ({ json }) =>
  json ? JSON.stringify(data) : render(data, renderOpts);
