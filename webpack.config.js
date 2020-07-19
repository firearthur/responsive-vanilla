const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              localsConvention: 'camelCaseOnly',
              modules: {
                localIdentName: '[path]__[local]--[hash:base64:8]',
                mode: (resourcePath) => {
                  if (/pure.css$/i.test(resourcePath)) {
                    return 'pure';
                  }

                  if (/global.css$/i.test(resourcePath)) {
                    return 'global';
                  }

                  return 'local';
                }
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
};
