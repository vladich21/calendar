const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const _pathToJs = './src/'
const pages = [
  ['sign-up', `${_pathToJs}sign-up.js`], 
  ['sign-in', `${_pathToJs}sign-in.js`]
]

module.exports = (env, argv) => {
  const mode = argv.mode || 'production'
  const isDev = mode === 'development'
  const devtool = isDev ? 'source-map' : 'nosources-source-map'
  return {
    mode,
    devtool,
    entry: Object.fromEntries(pages),
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
    resolve: {
      extensions: ['.js'],
    },  
    module: {
      rules: [
        {
          test: /\.html$/i,
          use: 'html-loader',
        },
        {
          test: /\.(sc|c)ss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.svg$/i,

          use: 'url-loader',
          resourceQuery: /url/,
        },
      ],
    },
    plugins: [
      ...pages.map((page, index) => new HtmlWebpackPlugin({
        template: `./public/pages/${page[0]}.html`,
        filename: !index ? 'index.html' : `${page[0]}.html`,
        chunks: [page[0]]
      })),
      new MiniCssExtractPlugin()
    ],
    devServer: {
      port: 3000,
      hot: true,
<<<<<<< HEAD
      open: {
        app: {
          name: 'google chrome'
        }
      },
=======
      open: true,
>>>>>>> 632be2f40d7503b5f83e08a43dbc8cabbe9335e5
      historyApiFallback: true,
      client: {
        overlay: {
          errors: true,
          warnings: true,
        },
      },
    },
  }
}