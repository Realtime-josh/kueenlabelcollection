const path = require('path');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  return {
    entry: ['babel-polyfill',
            "core-js/modules/es.promise",
            "core-js/modules/es.array.iterator",
            './src/app.js'],
    output: {
      chunkFilename: '[name].bundle.js',
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        // exclude: /node_modules/,
        include: [path.join(__dirname, './src'), require.resolve('dotenv'), require.resolve('dotenv-webpack') ],
      }, {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader', 'sass-loader'
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      ],
    },
    node: {
      fs: 'empty'
    },
    plugins: [
      new Dotenv({
        path: path.join(__dirname,'.env')
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // all options are optional
        filename: '[name].css',
        chunkFilename: '[id].css',
        ignoreOrder: false, // Enable to remove warnings about conflicting order
      })
    ],
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
    },
  }
};
