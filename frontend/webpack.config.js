const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { LoaderOptionsPlugin } = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

const plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),

  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
  }),
  new ESLintPlugin({
    extensions: ['js'],
  })
];

module.exports = {
  mode,
  plugins,
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },

  devServer: {
    hot: true,
  },

  module: {
  	rules: [
      { test: /\.(html)$/, use: ['html-loader'] },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: mode === 'production' ? 'asset' : 'asset/resource',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  }
}
