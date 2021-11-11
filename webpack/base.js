// (C) 2021 GoodData Corporation
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProvidePlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const getPublicPath = function (folder = "") {
    return process.env.NODE_ENV === "development" ? "" : `/nudata/${folder}`;
};

module.exports = {
    entry: {
        app: path.resolve(__dirname, "../src/index.tsx"),
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
        alias: {
            "~components": path.resolve(__dirname, "../src/components/"),
            "~pages": path.resolve(__dirname, "../src/pages/"),
            "~css": path.resolve(__dirname, "../src/css/"),
            "~icons": path.resolve(__dirname, "../src/icons/"),
            "~images": path.resolve(__dirname, "../src/images/"),
            images: path.resolve(__dirname, "../src/images/"),
            "~styleGuide": path.resolve(__dirname, "../src/styleGuide/"),
            "~constants": path.resolve(__dirname, "../src/constants/"),
            "~utils": path.resolve(__dirname, "../src/utils/"),
            "~contexts": path.resolve(__dirname, "../src/contexts/"),
        },
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        publicPath: getPublicPath(),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)?$/,
                loader: "babel-loader",
                include: [path.join(__dirname, "../src"), path.join(__dirname, "../.storybook")],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|woff(2)?|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(svg)?$/,
                loader: "svg-inline-loader",
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            favicon: path.resolve(__dirname, "../src/favicon.png"),
            title: "GPP - GD Palette Picker",
            template: path.resolve(__dirname, "../src/index.html"),
        }),
        new ProvidePlugin({
            React: "react",
            process: "process/browser",
        }),
    ],
};
