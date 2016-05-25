const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
};

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
    PATHS.src,
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
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
      },
      { 
        test: /\.css$/, 
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') 
      },
    ]
  },
  postcss: [
    require('autoprefixer')
  ],
  plugins: [
    new CleanWebpackPlugin([PATHS.dist], {
      root: process.cwd()
    }),
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inect: true
    })
  ]
}