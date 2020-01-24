const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    blog: './src/blog.js',
    post: './src/post.js',
  },
  output: {
    filename: './src/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['index'],
      filename: 'index.html',
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['blog'],
      filename: 'blog.html',
      template: './src/blog.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['post'],
      filename: 'post.html',
      template: './src/post.html'
    }),
    new CopyPlugin([
      { from: 'src/img/', to: 'img/' },
      { from: 'src/audio/', to: 'audio/' },
      { from: 'src/video/', to: 'video/' },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: {
          loader: 'eslint-loader',
          options: {
            failOnError: true,
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',

            options: {
              outputPath: 'fonts/',
            },
          }
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'img/',
            name: '[name].[ext]'
          }
        }
      },
      {
        test: /\.(mp3)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'audio/',
            name: '[name].[ext]'
          }
        }
      },
      {
        test: /\.(webm)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'video/',
            name: '[name].[ext]'
          }
        }
      }
    ]
  },
};
