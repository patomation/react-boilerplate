const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  devServer: {
    inline:true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
          test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.eot$|\.woff$|\.woff2$|\.ttf$|\.wav$|\.mp3$/,
          loader: 'file-loader?name=[name].[ext]'  //Keeps original file name
      }
    ]
  },
  resolve: {
    alias: {
      //Use ONE local version of react when linking to other libraries. Use this react.
      react: path.resolve('./node_modules/react')
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      title: 'React Boilerplate',
      template: './src/index.html',
      filename: './index.html'
    })
  ]
};
