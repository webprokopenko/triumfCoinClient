const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src','main.js'),
    output:{
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: path.join(__dirname, 'src'),
                loader: 'babel-loader',
                query:{
                    cacheDirectory: 'babel_cache',
                    presets: ['es2017','react']
                }
            }
        ]
    },
    node: {
        fs: 'empty'
    }
};