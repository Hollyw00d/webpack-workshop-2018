const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => ({
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
