// (C) 2021 GoodData Corporation
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

const { DefinePlugin } = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.s([ac])ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[local]_[contenthash:base64:5]",
                            },
                            sourceMap: false,
                            url: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: false,
                        },
                    },
                    {
                        loader: "sass-resources-loader",
                        options: {
                            resources: path.resolve(__dirname, "../src/css/variables/**/*.scss"),
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[hash:6].css",
        }),
        new DefinePlugin({
            BACKEND_URL: "''",
        }),
    ],
};
