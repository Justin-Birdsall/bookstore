const path = require('path');

module.exports = {
  entry: './src/index.jsx', // Assuming your entry point is src/index.jsx
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output file
  },
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts'], // Add support for JavaScript and TypeScript files
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Match JavaScript and JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel for JavaScript and JSX files
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/, // Match TypeScript and TSX files
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader', // Use ts-loader for TypeScript and TSX files
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};
