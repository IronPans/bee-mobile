const helpers = require('./helpers');
const webpack = require('webpack');
const chalk = require('chalk');
const path = require('path');
/**
 * Webpack Plugins
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (options) => {
    const pkg = require(path.join(process.cwd(), 'package.json'));
    const isProduction = process.env.NODE_ENV === 'production';
    // const name = (options.env === 'development' || options.env === 'dev') ? pkg.name : `${pkg.name}.min`;
    return {
        /**
         * The entry point for the bundle
         *
         * See: http://webpack.github.io/docs/configuration.html#entry
         */
        entry: {
            main: helpers.root('./examples/index.tsx'),
            vendor: helpers.root('./examples/vendor.tsx')
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.tsx?$/,
                    loaders: ['babel-loader', 'ts-loader'],
                    exclude: /node_modules/
                },
                {
                    test: /\.(scss|sass|css)$/,
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: 'css-loader!postcss-loader!sass-loader'
                    })
                },
                /**
                 * Raw loader support for *.html
                 * Returns file content as string
                 *
                 * See: https://github.com/webpack/raw-loader
                 */
                {
                    test: /\.html$/,
                    use: 'raw-loader',
                    exclude: [helpers.root('examples/index.html')]
                },
                /**
                 * File loader for supporting images, for example, in CSS files.
                 */
                {
                    test: /\.(jpg|png|gif)$/,
                    use: 'file-loader'
                },
                /**
                 * File loader for supporting fonts, for example, in CSS files.
                 */
                {
                    test: /\.(eot|woff2?|svg|ttf)([\?]?.*)$/,
                    use: 'file-loader'
                }
            ]
        },
        /**
         * Options affecting the resolving of modules.
         *
         * See: http://webpack.github.io/docs/configuration.html#resolve
         */
        resolve: {
            modules: [helpers.root('./node_modules')],
            extensions: [
                '.ts',
                '.tsx',
                '.js',
                '.scss',
                '.css',
                '.js',
                '.jsx',
                '.json'
            ],
            alias: {
                [pkg.name]: process.cwd()
            }
        },
        plugins: [
            new CommonsChunkPlugin({
                names: ['vendor', 'manifest'],
                minChunks: Infinity
            }),
            new HtmlWebpackPlugin({
                title: 'Bee Mobile',
                chunksSortMode: function (a, b) {
                    const entryPoints = ['vendor', 'main'];
                    return entryPoints.indexOf(a.names[0]) - entryPoints.indexOf(b.names[0]);
                },
                favicon: './examples/assets/ico/favicon.ico',
                stat: isProduction,
                inject: 'body',
                template: './examples/index.html',
                hash: true,
                minify: isProduction ? {
                    collapseWhitespace: true,
                    collapseInlineTagWhitespace: true,
                    removeRedundantAttributes: true,
                    removeEmptyAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    removeComments: true
                } : null
            }),
            new webpack.BannerPlugin(`${pkg.name} v${pkg.version}`),
            new webpack.ProgressPlugin((percentage, msg, addInfo) => {
                const stream = process.stderr;
                if (stream.isTTY && percentage < 0.71) {
                    stream.cursorTo(0);
                    stream.write(`☺☺☺  ${chalk.magenta(msg)} (${chalk.magenta(addInfo)})`);
                    stream.clearLine(1);
                } else if (percentage === 1) {
                    console.log(chalk.green('\n ☺☺☺ webpack: bundle build is now finished.'));
                }
            })
        ]
    };
};