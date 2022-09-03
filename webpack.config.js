const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src/'),
      components: path.resolve(__dirname, './src/components/'),
      styles: path.resolve(__dirname, './src/styles/'),
      views: path.resolve(__dirname, './src/views/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader?cacheDirectory=true",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              "@babel/plugin-transform-runtime",
              "@babel/plugin-proposal-class-properties"
            ]
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.worker\.js$/,
        use: { loader: "worker-loader" },
      },
    ]
  },
  devServer: {
    disableHostCheck: true,
    historyApiFallback: true,
    contentBase: './',
    hot: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
  ]
}
