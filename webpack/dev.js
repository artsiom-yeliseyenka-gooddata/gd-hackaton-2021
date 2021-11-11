// (C) 2021 GoodData Corporation
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

const { HotModuleReplacementPlugin, DefinePlugin } = require("webpack");

const backendShortcuts = {
    dev: "https://internaltraining.na.gooddata.com",
};

const BACKEND_URL = backendShortcuts.dev;

module.exports = {
    devtool: "eval-cheap-module-source-map",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.s([ac])ss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[local]_[contenthash:base64:5]",
                            },
                            sourceMap: true,
                            url: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
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
        new HotModuleReplacementPlugin(),
        new DefinePlugin({
            BACKEND_URL: `'${BACKEND_URL}'`,
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, "../dist"),
        publicPath: `/`,
        historyApiFallback: true,
        compress: true,
        https: true,
        port: 8999,
        hot: true,
        proxy: {
            "/gdc": {
                changeOrigin: true,
                cookieDomainRewrite: "localhost",
                secure: false,
                target: BACKEND_URL,
                headers: {
                    host: BACKEND_URL,
                    origin: null,
                },
                onProxyReq(proxyReq) {
                    proxyReq.setHeader("accept-encoding", "identity");
                },
            },
        },
        stats: {
            all: false,
            errors: true,
            warnings: true,
        },
    },
    stats: "errors-warnings",
};
