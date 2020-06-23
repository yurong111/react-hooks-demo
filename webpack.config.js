const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const publicPath = process.env.PUBLIC_PATH

module.exports = env => {
  const DEV = env === 'development'
  return {
    mode: DEV ? 'development' : 'production',
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'dist/'),
      filename: '[name].[hash:8].js',
      chunkFilename: '[name].[chunkhash:8].js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {rootMode: 'upward'},
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                name: 'images/[name].[hash:8].[ext]',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: `./index.html`,
        template: path.join(__dirname, `src/index.html`),
      })
    ],
    devServer: {
      host: 'localhost',
      port: 3003,
      contentBase: path.join(__dirname, 'dist'),
    },
  }
}
