const path = require('path');
const Dotenv = require("dotenv-webpack");

module.exports = {
  // The entry point file described above
  entry: './src/index.js',
  // The location of the build folder described above
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  
  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify/browser"),
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      buffer: require.resolve("buffer/"),
    },
  },
  mode: 'development',
  stats: "minimal", // Muestra solo la información esencial
  plugins: [
    /*new Dotenv({
      path: path.join(__dirname, "./.env"),
    }),*/
    new Dotenv()
  ],
};
