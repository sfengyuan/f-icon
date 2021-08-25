const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { resolve } = require('path')

const mode = process.env.NODE_ENV
const publicPath = mode === 'development' ? '/' : '/f-icon/'
module.exports = {
  entry: resolve(__dirname, './main.js'),
  output: {
    path: resolve(__dirname, '../docs/'),
    filename: '[name].js',
    publicPath
  },
  mode,
  stats: {
    preset: mode === 'development' ? 'minimal' : 'detailed'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
        template: resolve(__dirname, './index.html'),
        inject: true
    })
  ]
}
