var webpack = require('webpack');

module.exports = {
    entry: [
        "./index.js"
    ],
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/, 
                loader: 'babel-loader', 
                query: {presets: ['es2015', 'react']},
                exclude: /node_modules|.git/
            }
        ]
    }
}
