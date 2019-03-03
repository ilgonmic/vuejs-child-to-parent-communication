const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  }
};