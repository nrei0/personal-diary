const path = require('path');

const { ReactLoadablePlugin } = require('react-loadable/webpack');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const outDirectory = '.dist';

module.exports = {
  entry: { app: './src/client' },
  output: {
    filename: '[chunkhash].app.js',
    path: path.resolve(__dirname, outDirectory)
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      automaticNameDelimiter: '.',
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          priority: 1,
          minSize: 120000
        }
      }
    }
  },
  plugins: [
    new ReactLoadablePlugin({ filename: './.dist/react-loadable.json' }),
    new WebpackAssetsManifest({ output: './.dist/manifest.json' }),
    new BundleAnalyzerPlugin()
  ],
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, '.dist'),
    compress: true,
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      context: () => true,
      target: 'http://0.0.0.0:8081'
    },
    disableHostCheck: true,
    writeToDisk: true,
    hot: false,
    inline: false
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  }
};
