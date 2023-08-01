const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  // The entry point file described above
  entry: "./src/index.js",
  // The location of the build folder described above
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    fallback: {
      path: false,
    },
  },
  mode: "development",
  //stats: "minimal", // Muestra solo la información esencial
  plugins: [
    new Dotenv(),
  ],
};
