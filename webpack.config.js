const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
  mode: 'development',
  devServer: {
    port: 8083,
  },
  module: {
    rules: [
      {
        /* The following line to ask babel 
             to compile any file with extension
             .js */
        test: /\.js?$/,
        /* exclude node_modules directory from babel. 
            Babel will not compile any files in this directory*/
        exclude: /node_modules/,
        // To Use babel Loader
        loader:
          'babel-loader',
        options: {
          presets: [
            '@babel/preset-env' /* to transfer any advansed ES to ES5 */,
            '@babel/preset-react',
          ], // to compile react to ES5
        },
      },
      {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
      }
    ],
  },
  plugins: [
    new ModuleFederationPlugin(
      {
        name: 'MFE1',
        filename:
          'remoteEntry.js',
        exposes: {
          './CreateOp':
            './src/CreateOp',
        },
        shared: {
          react: { singleton: true, eager: true, requiredVersion: "^18.0.0" },
          "react-dom": {
            singleton: true,
            eager: true,
            requiredVersion: "^18.0.0",
          },
          "react-router-dom": {
            singleton: true,
            eager: true,
            requiredVersion: "^18.0.0",
          },
        }
      }
    ),
    new HtmlWebpackPlugin({
      template:
        './public/index.html',
    }),
  ],
};