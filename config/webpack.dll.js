const webpack = require('webpack');
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

const vendors = [
    'react',
    'react-dom',
    'react-motion',
    'react-router',
    'classnames'
];

module.exports = {
    output: {
        path: path.resolve(process.cwd(), 'build'),
        filename: '[name].js',
        library: '[name]',
    },
    entry: {
        'lib': vendors,
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: '[name]',
            context: __dirname,
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                collapse_vars: true,
                reduce_vars: true,
            },
            output: {
                beautify: false,
                comments: false,
            }
        }),
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
    ],
}