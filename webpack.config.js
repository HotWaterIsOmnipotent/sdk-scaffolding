"use strict";

const productionConfig = require("./config/webpack.prod.config");
const developmentConfig = require("./config/webpack.dev.config");

module.exports = (env) => {
    if(env === "production") {
        console.info("生产环境...");
        return productionConfig;
    } else {
        console.info("开发环境...");
        return developmentConfig;
    }
}