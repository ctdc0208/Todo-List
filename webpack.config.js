const path = require('path');

module.exports = {
   mode: 'development',
    entry: {
      index: './src/index.js',
      ui: './src/UI.js',
      add: './src/addPage.js',
    },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
