const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.ts",
  module: {},
  resolve: {
    extensions: ["ts", "tsx", "js", "jsx", "json"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    use,
  },
  plugins: [{}],
};
