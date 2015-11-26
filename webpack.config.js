var svgoConfig = JSON.stringify({
  plugins: [
    {removeTitle: true},
    {convertColors: {shorthex: false}},
    {convertPathData: false}
  ]
});

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
          test: /\.js?$/,         // Match both .js and .jsx files
          exclude: /node_modules/,
          loader: "babel-loader",
          query:
            {
              presets:['es2015','react']
            }
      },
      {
        test: /\.html$/,
        loader: "file-loader?name=[name].[ext]",
      },
      // SASS
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },

      //Image Loader
      { test: /\.jpe?g$|\.gif$|\.png$/i, loader: "file-loader" },

      //SVG Loader
      {
        test: /.*\.svg$/,
        loaders: [
          'file-loader',
          'svgo-loader?' + svgoConfig
        ]
      },

      //Hotloader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot-loader", "babel-loader"],
      },
    ],
  }


}
