const path = require("path");

const {
  HOST = "localhost",
  HTTP_PORT: SERVER_PORT = 3102,
  DEV_SERVER_PORT = 3103,
} = process.env;
const PROXY = {
  SERVER: `http://${HOST}:${SERVER_PORT}`,
  DEV_SERVER: `http://${HOST}:${DEV_SERVER_PORT}`,
};

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  devtool: "inline-source-map",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./dist",
    hot: true,
    port: 3103,
    proxy: {
      "/api": {
        target: {
          host: "localhost",
          protocol: "http:",
          port: PROXY.SERVER,
        },
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"],
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
};
