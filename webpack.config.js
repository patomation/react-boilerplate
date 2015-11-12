module.exports = {
  context: __dirname + "/app",
  entry: {
    javascript: "./app.js",
    html: "./index.html"
  },


  output: {
    filename: "app.js",
    path: __dirname + "/dist"
  },


  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      // SASS
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },

      //Image Loader
      { test: /\.jpe?g$|\.gif$|\.png$/i, loader: "file-loader" },

      //Hotloader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"],
      },
    ],
  }


}
