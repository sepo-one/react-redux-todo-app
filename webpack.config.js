module.exports = {
    context: __dirname + "/src",
    entry: "./index.jsx",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { 
                test: /\.jsx?$/, 
                loader: 'babel-loader', 
                query: {presets: ['react']}, 
                exclude: /node_modules/
            }
        ]
    }
}
