"use strict";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {

  mode: "production",

  entry: {
    "js": "./src/index.js"
  },
  
  output: {
    path: path.join(__dirname,'../build'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          }
        ]
      },
      {
        test:/\.(png|jpg|jpeg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },

  plugins: [
    // 自动生成html，并自动将打包后资源引入
    new HtmlWebpackPlugin({
      template: "./src/assets/index.html",
      minify: {
        collapseWhitespace: true
      }
    }),

    new MiniCssExtractPlugin({
      moduleFilename: ({name}) => `${name.replace('js', 'css')}-[hash].css`,
      chunkFilename: "[id].css"
    }),

    new OptimizeCssAssetsPlugin()
  ]
}