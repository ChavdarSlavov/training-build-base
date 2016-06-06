const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const extractSass = new ExtractTextPlugin('style.css', {allChunks: true});

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
};
const sassLoaders = [
  'css?sourceMap&modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
  'postcss-loader',
  'resolve-url',
  'sass?sourceMap=true&sourceMapContents=true'
].join('!');

module.exports = {
  devServer: {
    noInfo: true,
    colors: true,
    contentBase: PATHS.dist,
    port: 3000,
    historyApiFallback: true,
    aggregateTimeout: 300,
    poll: 1000
  },
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:3000/',
    'webpack/hot/only-dev-server',
    PATHS.src
  ],
  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  },
  resolve: {
    moduleDirectories: ['node_modules', 'src'],
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0']
      },
      {
        test: /\.scss$/,
        loader: extractSass.extract('style', sassLoaders)
      }
    ]
  },
  postcss: [
    require('autoprefixer')
  ],
  plugins: [
    new CleanWebpackPlugin([PATHS.dist], {
      root: process.cwd()
    }),
    extractSass,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inect: true
    })
  ]
};
