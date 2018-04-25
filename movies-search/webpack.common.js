const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
                exclude: /node_modules/,
                options: {
                  useCache: true
                }
              }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "Example",
            hash: true,
            template: path.resolve(__dirname, "./index.html")
        }),
        new ExtractTextPlugin("[name].css"),
        new CleanWebpackPlugin(['dist'])
    ]
};