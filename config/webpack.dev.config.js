"use strict";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

  mode: "development",

  entry: {
    "js/index": "./src/index.js"
  },
  
  output: {
    path:path.join(__dirname,'../build'),
    filename:'[name]_[hash].js'
  },

  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development"
            }
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
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development"
            }
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
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development"
            }
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
      chunkFilename: "[id].css",
      ignoreOrder: false
    })
  ],

  // 本地开发环境启动服务
  devServer: {
    contentBase: path.join(__dirname, "../build"),
    compress: true,
    port: 8080,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true
      }
    }
  }
}