const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'videos/[name][ext]',
  },
  module: {
    rules: [
      {
        test: /\.(mp4|webm|ogg)$/,
        type: 'asset/resource',
      },
    ],
  },
};

