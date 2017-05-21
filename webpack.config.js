const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let env = (process.env.NODE_ENV || 'development').trim();
let isProd = env === 'production';
let isDev = !isProd;

let config = {
  context: path.join(__dirname, './client/src'),
  entry: './js/app.js',
  output: {
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[id].[chunkhash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './client/src',
    stats: 'minimal',
    hot: true,
    historyApiFallback: true
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    },
    extensions: ['.js', '.json', '.vue', '.scss'],
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'buble-loader',
        query: {
          objectAssign: 'Object.assign'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings 
        }, {
          loader: "css-loader" // translates CSS into CommonJS 
        }]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings 
        }, {
          loader: "css-loader" // translates CSS into CommonJS 
        }, {
          loader: "less-loader" // compiles Less to CSS 
        }]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          buble: {
            objectAssign: 'Object.assign'
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          query: {
            limit: 10000,
            name: './img/[name].[hash:7].[ext]'
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: './fonts/[name].[hash:7].[ext]'
          }
        }
      }
    ]
  }
};

if (!isProd) {
  config.devtool = "source-map";
}

config.plugins = [
  // Remove old dist folder to start fresh
  new CleanWebpackPlugin(['dist']),

  // Global environment variable to determine dev/prod in code
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }),

  new webpack.HotModuleReplacementPlugin(),

  // Simplifies creation of HTML files to serve your webpack bundles
  new HtmlWebpackPlugin({
    title: 'NodeJS Blog App',
    template: 'index.ejs'
  }),

  // Provide polyfill for browers that dont support promises
  new webpack.ProvidePlugin({
    Promise: "bluebird"
  }),

  // Specify assets root location used by htmlLoader
  new webpack.LoaderOptionsPlugin({
    options: {
      htmlLoader: {
        root: path.join(__dirname, './client/src')
      }
    }
  })
];

module.exports = config;
