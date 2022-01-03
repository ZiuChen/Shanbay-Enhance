const { merge } = require('webpack-merge')
const LiveReloadPlugin = require('webpack-livereload-plugin')
const UserScriptMetaDataPlugin = require('userscript-metadata-webpack-plugin')

const metadata = require('./metadata.js')
const webpackConfig = require('./webpack.config.base.js')

metadata.name = 'Shanbay-Enhance(dev)'
metadata.require.push(
    'file://' + path.resolve(__dirname, '../dist/index.debug.user.js')
)

const cfg = merge(webpackConfig, {
    entry: {
        debug: webpackConfig.entry,
        dev: path.resolve(__dirname, './dev.js') // Generate index.dev.user.js
    },
    output: {
        filename: 'index.[name].user.js',
        path: path.resolve(__dirname, '../dist'),
    },
    devtool: false,
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
    },
    plugins: [
        new LiveReloadPlugin({
            delay: 500,
        }),
        new UserScriptMetaDataPlugin({
            metadata,
        }),
    ],
})

module.exports = cfg