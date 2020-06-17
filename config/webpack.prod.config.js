"use strict";

const path = require("path");

module.exports = {

  mode: "production",

  entry: {
    "js": "./src/index.js"
  },
  
  output: {
    path: path.join(__dirname,'../build'),
    filename: '[name].js'
  }
}