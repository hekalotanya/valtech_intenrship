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
  // new HtmlWebpackPlugin({
  //   template: './views/index.hbs',
  // }),

  new MiniCssExtractPlugin({
    filename: 'main.css',
  }),
  // new ESLintPlugin({
  //   extensions: ['js'],
  // }),
];

module.exports = {
  mode,
  plugins,
  resolve: {
    fallback: {
      fs: false,
      http: false,
      crypto: false,
      zlib: false
    }
  },
  entry: ['babel-polyfill', './src/javascripts/index.js'],
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },

  devServer: {
    hot: true,
  },

  module: {
  	rules: [
      { test: /\.(hbs)$/, use: ['html-loader'] },
      {
        test: /\.(sa|sc|c)ss$/,
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
        generator: {
          filename: 'assets/images/[hash].min[ext]',
        },
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
