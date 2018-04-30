const webpack = require('webpack');

module.exports = {
  entry: './app/index.js',
  output: {
    path: __dirname + '/public',
    filename: './bundle.js',
  },
  devServer: {
    port: 9191,
    contentBase: './public',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015'],
        plugins: ['transform-object-rest-spread']
      }
    }]
  },
  mode: 'development',
};
