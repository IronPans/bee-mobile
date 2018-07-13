const helpers = require('./helpers');
const webpack = require('webpack');
const chalk = require('chalk');
const path = require('path');
/**
 * Webpack Plugins
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');

// root project name
const projectName = 'examples';

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
            main: helpers.root('./' + projectName + '/index.tsx')
        },
        module: {
            strictExportPresence: true,
            rules: [
                {
                    test: /\.(tsx?|jsx?)$/,
                    enforce: 'pre',
                    loader: 'tslint-loader',
                    options: {
                        // typeCheck: true
                    },
                    include: [helpers.root('./examples'), helpers.root('./src')]
                }
            ]
        },
        /**
         * Options affecting the resolving of modules.
         *
         * See: http://webpack.github.io/docs/configuration.html#resolve
         */
        resolve: {
            modules: [helpers.root(projectName), helpers.root('./node_modules')],
            extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
            alias: {
                [pkg.name]: process.cwd()
            }
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Bee Mobile',
                chunksSortMode: function (a, b) {
                    const entryPoints = ['vendor', 'main'];
                    return entryPoints.indexOf(a.names[0]) - entryPoints.indexOf(b.names[0]);
                },
                favicon: './favicon.ico',
                stat: isProduction,
                inject: 'body',
                template: './' + projectName + '/index.html',
                hash: true,
                minify: isProduction ? {
                    removeComments: true,
                    collapseWhitespace: true,
                    collapseInlineTagWhitespace: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    keepClosingSlash: true,
                    minifyJS: true,
                    minifyCSS: true,
                    minifyURLs: true,
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
        ],
        node: {
            dgram: 'empty',
            fs: 'empty',
            net: 'empty',
            tls: 'empty',
            child_process: 'empty',
        },
    };
};