// (C) 2021 GoodData Corporation
/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require("webpack-merge");

const baseConfig = require("./webpack/base");
const prodConfig = require("./webpack/prod");
const devConfig = require("./webpack/dev");

module.exports = () => {
    if (process.env.NODE_ENV === "development") {
        return merge(baseConfig, devConfig);
    }
    return merge(baseConfig, prodConfig);
};
