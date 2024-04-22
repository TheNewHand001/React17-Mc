/*
 * @Author: JS零基础 13194175+js-zero-foundation@user.noreply.gitee.com
 * @Date: 2024-04-22 18:49:38
 * @LastEditors: JS零基础 13194175+js-zero-foundation@user.noreply.gitee.com
 * @LastEditTime: 2024-04-22 19:05:01
 * @FilePath: \AD-Pro-React17\config\webpack.prod.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const OpenBrowserPlugin = require("open-browser-webpack4-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackConfigBase = require("./webpack.base.config");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const PORT = 8080;
const webpackConfigDev = {
  mode: "development",
  plugins: [
    new CleanWebpackPlugin({
      protectWebpackAssets: true,
    }),
    new HtmlWebpackPlugin({
      inject: "body",
      title: "React App",
      filename: "index.html",
      template: path.join(__dirname, "../src/index.html"),
    }),
  ],
};

module.exports = merge(webpackConfigBase, webpackConfigDev);
