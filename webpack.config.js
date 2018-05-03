const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const bundlePath = path.resolve(__dirname, "/dist/");

module.exports = {
  entry: {
    bundle: ["react-hot-loader/patch", "babel-polyfill", "./src/index.js"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    publicPath: bundlePath,
    filename: "[name].js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin(
      [{ from: "dist/*.*", to: "../public/", toType: "dir" }],
      {}
    )
  ]
};
