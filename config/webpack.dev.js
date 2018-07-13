const webpack = require('webpack');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const path = require('path');

/**
 * Used to merge webpack configs
 */
const webpackMerge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

/**
 * Webpack Constants
 */
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8081;

const METADATA = webpackMerge(commonConfig({
    env: ENV
}).metadata, {
    host: HOST,
    port: PORT,
    ENV: ENV,
    HMR: false
});

module.exports = (options) => {
    const pkg = require(path.join(process.cwd(), 'package.json'));
    return webpackMerge(commonConfig({env: ENV}), {
        mode: 'development',
        /**
         * Developer tool to enhance debugging
         *
         * See: http://webpack.github.io/docs/configuration.html#devtool
         * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
         */
        devtool: 'cheap-module-source-map',
        /**
         * Options affecting the output of the compilation.
         *
         * See: http://webpack.github.io/docs/configuration.html#output
         */
        output: {
            path: helpers.root('build'),
            filename: '[name].bundle.js',
            sourceMapFilename: '[file].map',
            chunkFilename: '[id].chunk.js'
        },
        module: {
            rules: [
                {
                    oneOf: [
                        {
                            test: /\.(tsx|ts|js|jsx)$/,
                            loaders: ['babel-loader', 'ts-loader'],
                            exclude: /node_modules/
                        },
                        {
                            test: /\.(bmp|gif|jpe?g|png)$/,
                            loader: require.resolve('url-loader'),
                            options: {
                                limit: 10000,
                                name: 'static/media/[name].[hash:8].[ext]',
                            },
                        },
                        {
                            test: /\.(scss|sass|css)$/,
                            use: [
                                require.resolve('style-loader'),
                                {
                                    loader: require.resolve('css-loader'),
                                    options: {
                                        importLoaders: 1,
                                    },
                                },
                                {
                                    loader: require.resolve('postcss-loader'),
                                    options: {
                                        ident: 'postcss',
                                        plugins: () => [
                                            autoprefixer({
                                                browsers: [
                                                    'last 2 versions',
                                                    'Firefox ESR',
                                                    '> 1%',
                                                    'ie >= 9',
                                                    'iOS >= 8',
                                                    'Android >= 4'
                                                ]
                                            }),
                                            cssnano({
                                                preset: 'default',
                                                zindex: false
                                            }),
                                        ],
                                    },
                                },
                                {
                                    loader: 'sass-loader'
                                }
                            ]
                        },
                        {
                            exclude: [/\.(js|jsx|tsx|ts)$/, /\.html$/, /\.json$/],
                            loader: require.resolve('file-loader'),
                            options: {
                                name: 'static/media/[name].[hash:8].[ext]',
                            },
                        }
                    ]
                }
            ]
        },
        plugins: [
            /**
             * Plugin: webpack-bundle-analyzer
             * Description: Visualize size of webpack output files with an interactive zoomable treemap.
             */
            //new BundleAnalyzerPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            /**
             * Plugin: DefinePlugin
             * Description: Define free variables.
             * Useful for having development builds with debug logging or adding global constants.
             *
             * Environment helpers
             *
             * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
             */
            new webpack.DefinePlugin({
                'process.env': {
                    ENV: JSON.stringify(METADATA.ENV),
                    NODE_ENV: JSON.stringify(METADATA.ENV),
                    VERSION: JSON.stringify(pkg.version)
                }
            })
        ],
        /**
         * Webpack Development Server configuration
         * Description: The webpack-dev-server is a little node.js Express server.
         * The server emits information about the compilation state to the client,
         * which reacts to those events.
         *
         * See: https://webpack.github.io/docs/webpack-dev-server.html
         */
        devServer: {
            port: METADATA.port,
            host: METADATA.host,
            historyApiFallback: true,
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000,
                ignored: /node_modules/
            },
            disableHostCheck: true
        }
    });
};
