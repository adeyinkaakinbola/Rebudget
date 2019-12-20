//has the job of bundling the files
const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

process.env.NODE_ENV = process.env.NODE_ENV || "production";

if (process.env.NODE_ENV === "development") {
  require("dotenv").config({ path: ".env.development" });
}else if (process.env.NODE_ENV==='production'){
  require('dotenv').config({path:'.env.production'});
}
module.exports = env => {
  const isProduction = env === "production";
  const CSSExtract = new ExtractTextPlugin("styles.css");
  return {
    entry: "./src/app.js", //when webpack wants to bundle it goes to './src/app.js'
    output: {
      path: path.join(__dirname, "public", "dist"), // _dirname starts from the root
      filename: "bundle.js" //creates a new file called bundle .js
    }, //specifies the rules
    module: {
      rules: [
        {
          loader: "babel-loader", //converts the code into what the broswer can understand
          test: /\.js$/, //rule that tells babel loader to convert only js files
          exclude: /node_modules/ //tells babel not to run node modules
        },
        {
          test: /\.s?css$/, //scss or css another framework
          use: CSSExtract.extract({
            use: [
              {
                loader: "css-loader",
                options: {
                  sourceMap: true
                }
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        }
      ]
    },
    plugins: [
      CSSExtract,
      new webpack.DefinePlugin({
        "process.env.FIREBASE_API_KEY": JSON.stringify(
          process.env.FIREBASE_API_KEY
        ),
        "process.env.FIREBASE_AUTH_DOMAIN": JSON.stringify(
          process.env.FIREBASE_AUTH_DOMAIN
        ),
        "process.env.FIREBASE_DATABASE_URL": JSON.stringify(
          process.env.FIREBASE_DATABASE_URL
        ),
        "process.env.FIREBASE_PROJECT_ID": JSON.stringify(
          process.env.FIREBASE_PROJECT_ID
        ),
        "process.env.FIREBASE_STORAGE_BUCKET": JSON.stringify(
          process.env.FIREBASE_STORAGE_BUCKET
        ),
        "process.env.FIREBASE_MESSAGING_SENDER_TO": JSON.stringify(
          process.env.FIREBASE_MESSAGING_SENDER_TO
        ),
        "process.env.FIREBASE_APP_ID": JSON.stringify(
          process.env.FIREBASE_APP_ID
        )
      })
    ],
    devtool: isProduction ? "source-map" : "inline-source-map", //
    devServer: {
      //running server....create a server and then checks the contents of the path
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
      publicPath: "/dist/"
    }
  };
};
