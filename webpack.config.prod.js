const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const OfflinePlugin = require('offline-plugin');


module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[chunkhash].js',
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], { verbose: false }),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new CopyWebpackPlugin([
      { from: 'images/', to: 'images/' },
      { from: 'manifest.json' }]),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      sourceMap: false,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new SWPrecacheWebpackPlugin(
      {
        cacheId: 'uwseashell-pwa',
        filename: 'uwseashell-service-worker.js',
        runtimeCaching: [{
          handler: 'cacheFirst',
          urlPattern: /cardstack_search$/,
        },
        {
          handler: 'cacheFirst',
          urlPattern: /[.]jpg$/,
        }],
      }
    ),
    new OfflinePlugin({
      ServiceWorker:{
        navigateFallbackURL: '/'
      }
    })
  ],
  resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".css"]
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: "source-map-loader" }
    ],
    loaders: [
        { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      {
        test: /\.css/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
      },
      {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
              'file?hash=sha512&digest=hex&name=[hash].[ext]',
              'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
          ]
      }
    ],
  },
};
