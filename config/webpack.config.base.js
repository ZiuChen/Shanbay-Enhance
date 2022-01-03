const path = require('path')

const webpackConfig = {
    resolve: {
        extensions: ['.js', '.ts']
    },
    optimization: {
        minimize: false,
        moduleIds: 'named',
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist')
    },
    // target: 'web',
    module: {
        rules: [{
                use: {
                    loader: 'babel-loader',
                },
                test: /\.js$/,
            },
            {
                test: /\.ts$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    }
}

module.exports = webpackConfig