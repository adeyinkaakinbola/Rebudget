//has the job of bundling the files
const path = require('path');
module.exports = {
    entry: './src/playground/redux-101.js',//when webpack wants to bundle it goes to './src/app.js'
    output: {
        path: path.join(__dirname, 'public'),// _dirname starts from the root
        filename: 'bundle.js'//creates a new file called bundle .js
    },//specifies the rules
    module: {
        rules: [{
            loader: 'babel-loader',//converts the code into what the broswer can understand
            test: /\.js$/,//rule that tells babel loader to convert only js files
            exclude: /node_modules///tells babel not to run node modules
        },{
            test: /\.s?css$/,//scss or css another framework
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',//
    devServer: {//running server....create a server and then checks the contents of the path
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback:true
    }
};