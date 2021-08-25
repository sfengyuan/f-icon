const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: './test/main.js',
  output: {
    filename: './test/dist/index.js'
  },
  mode: 'development',
  stats: {
    preset: 'minimal',
    moduleTrace: false,
    logging: 'none',
    moduleAssets: false,
    runtimeModules: false,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './index.html'),
        inject: true
    })
  ]
};
