const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => ({
  devtool: "source-map",
  output: {
    filename: "bundle.js"
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          }, 
          'css-loader'
        ]
      }
    ]
  }
});
