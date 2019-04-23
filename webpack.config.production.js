const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
/* eslint-disable */

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


var path = require("path");
var webpack = require("webpack");

// copy the index for hosting on github pages
//require('file-loader?name=index.[ext]!../../index_docs.html');
//require('./index_docs.html')

module.exports = {
  mode: "production",
  entry: ["@babel/polyfill", "./index"],

  output: {
    path: path.join(__dirname, "docs"),
    filename: "bundle.js",
    publicPath: ''
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    //new BundleAnalyzerPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "markdown-loader",

            options: {
              gfm: false
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",

            options: {
              limit: 1000
            }
          }
        ],
        include: path.join(__dirname, 'assets')
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "url-loader",

            //options: {
            //  limit: 10000,
            //  mimetype: "image/svg+xml"
            //}
          }
        ],
        include: path.join(__dirname, 'assets')
      },
      {
        test: /\.(html)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "index.html"
            }
          }
        ]
      },
       {
    test: /\.mp4$/,
    use: 'file-loader'
  }
    ]
  },

  optimization: {
    minimize: true,

    minimizer: [new UglifyJsPlugin()]
  }
};
