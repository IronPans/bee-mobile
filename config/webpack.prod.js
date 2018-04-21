const webpack = require('webpack');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
/**
 * Webpack Plugins
 */
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

/**
 * Used to merge webpack configs
 */
const webpackMerge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

/**
 * Webpack Constants
 */
const ENV = process.env.ENV = process.env.NODE_ENV = 'production';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8089;

const METADATA = webpackMerge(commonConfig({
    env: ENV
}).metadata, {
    host: HOST,
    port: PORT,
    ENV: ENV,
    HMR: false
});
const projectName = 'examples';

module.exports = (options) => {
    return webpackMerge(commonConfig({ env: ENV }), {
        /**
         * Developer tool to enhance debugging
         *
         * See: http://webpack.github.io/docs/configuration.html#devtool
         * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
         */
        devtool: 'source-map',
        /**
         * Options affecting the output of the compilation.
         *
         * See: http://webpack.github.io/docs/configuration.html#output
         */
        output: {
            path: helpers.root('build'),
            filename: '[name].[chunkhash].bundle.js',
            sourceMapFilename: '[file].map',
            chunkFilename: '[name].[chunkhash].chunk.js'
        },
        module: {
            rules: [
                {
                    oneOf: [
                        {
                            test: /\.(jsx?|tsx?)$/,
                            loaders: ['babel-loader', 'ts-loader'],
                            exclude: /node_modules/
                        },
                        {
                            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                            loader: require.resolve('url-loader'),
                            options: {
                                limit: 10000,
                                name: 'static/media/[name].[hash:8].[ext]',
                            },
                        },
                        {
                            test: /\.(scss|sass|css)$/,
                            loader: ExtractTextPlugin.extract({
                                fallback: {
                                    loader: require.resolve('style-loader'),
                                    options: {
                                        hmr: false,
                                    },
                                },
                                use: [
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
                            })
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
                    NODE_ENV: JSON.stringify(METADATA.ENV)
                }
            }),
            new ExtractTextPlugin({ // define where to save the file
                filename: 'static/css/[name].[chunkhash].bundle.css',
                allChunks: true
            }),
            /**
             * Plugin: UglifyJsPlugin
             * Description: Minimize all JavaScript output of chunks.
             * Loaders are switched into minimizing mode.
             *
             * See: https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
             *
             * NOTE: To debug prod builds uncomment //debug lines and comment //prod lines
             */
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
            /**
             * Plugin: CompressionPlugin
             * Description: Compression all js/css/html of gz
             *
             * See: https://doc.webpack-china.org/plugins/compression-webpack-plugin/
             */
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
            /**
             * Plugin: CopyWebpackPlugin
             * Description: Copy files and directories in webpack.
             *
             * Copies project static assets.
             *
             * See: https://www.npmjs.com/package/copy-webpack-plugin
             */
            new CopyWebpackPlugin([{
                from: projectName + '/assets',
                to: 'assets'
            }]
            )
        ]
    });
};
