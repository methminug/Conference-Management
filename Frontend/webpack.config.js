const path = require('path')
//const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const isDevelopment = true

module.exports = {
    entry: "./src/app.js",
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, "public")
    },
    module: {
        rules: [
            {
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
            },
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
            },
            {
              test: /\.scss$/,
              use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "public")
    },
    resolve: {
        extensions: ['.js', '.scss']
    },
    plugins: [
      new HTMLWebpackPlugin({ template: './public/index.html' })
    ]
}