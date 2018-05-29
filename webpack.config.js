const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const cssModules =
  "modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]";
const path = require("path");

module.exports = {
  entry: ["./src/index.js"],

  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/"
  },

  resolve: {
    extensions: [".js", ".jsx", ".css"]
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["react", "es2015"]
        }
      },
      {
        test: /\.css$/,
        loaders: `style-loader!css-loader?${cssModules}`
      }
    ]
  },

  devServer: {
    host: "localhost",
    port: 8081,
    inline: true
  },

  plugins: [
    new HtmlWebpackPlugin({ template: "./src/assets/index.html" }),
    new ExtractTextPlugin("style.css", { allChunks: true })
  ],

  performance: { hints: false }
};