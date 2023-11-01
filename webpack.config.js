const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

// const theme = {
//   "primary-color": "#0F9096",
//   'tabs-card-height':'50px',
//   'border-radius-base': "2px",
//   'table-header-bg': '#eef2f9',
//   'table-header-color': '#0F9096',
//   'table-row-hover-bg': '#e7f9f6',
//   'btn-padding-base': '0 10px',
//   'font-size-base': '16px',
//   'tabs-horizontal-margin': '0',
//   'tabs-horizontal-padding': '13px 20px',
//   'border-color-base': '#ADB4C2',
//   'input-placeholder-color': '#7F8694',
//   'disabled-color': '#7F8694'
// };

const config = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    index: './src/index.tsx',
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: './[hash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      app: resolve(__dirname, 'src/')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|bmp|eot|woff|woff2|ttf|svg)/i, // load file into src url
        use: [
          {
            loader: 'file-loader',
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.md$/i,
        use: 'raw-loader',
        exclude: /node_modules/
      }
      // 
      // {
      //   test: /\.less$/,
      //   use: [{
      //     loader: 'style-loader',
      //   }, {
      //     loader: 'css-loader', // translates CSS into CommonJS
      //   }, {
      //     loader: 'less-loader', // compiles Less to CSS
      //     options: {
      //       modifyVars: theme,
      //       javascriptEnabled: true,
      //     },
      //   }]
      // }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '護家僱傭服務中心 - Respect Employment Services Centre',
      template: 'src/index.html'
    })
  ],
};

if (isProduction) {
  config.plugins.push(    
    new MiniCssExtractPlugin({
      filename: '[contenthash].css'
    })
  );

  config.optimization = {
    minimizer: [
      new TerserPlugin(),
    ],
  };
} else {
  config.devServer = {
    host: '0.0.0.0',
    https: true,
    port: 3000, // https://webpack.js.org/configuration/dev-server/#devserverport
    open: true, // https://webpack.js.org/configuration/dev-server/#devserveropen
    hot: true, // https://webpack.js.org/configuration/dev-server/#devserverhot
    compress: true, // https://webpack.js.org/configuration/dev-server/#devservercompress
    // stats: 'errors-only', // https://webpack.js.org/configuration/dev-server/#devserverstats-
    // overlay: true, // https://webpack.js.org/configuration/dev-server/#devserveroverlay
    static: {
			directory: join(__dirname, 'dist'),
			publicPath: '/',
		},
    historyApiFallback: true
  };
}

module.exports = config;