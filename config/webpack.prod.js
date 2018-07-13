const webpack = require('webpack');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const path = require('path');
const os = require('os');
/**
 * Webpack Plugins
 */
const webpackMerge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

/**
 * Used to merge webpack configs
 */
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({size: os.cpus().length});

/**
 * Webpack Constants
 */
const ENV = process.env.ENV = process.env.NODE_ENV = 'production';

const METADATA = webpackMerge(commonConfig({
    env: ENV
}).metadata, {
    ENV: ENV,
    HMR: false
});
const projectName = 'examples';

module.exports = (options) => {
    const pkg = require(path.join(process.cwd(), 'package.json'));
    return webpackMerge(commonConfig({env: ENV}), {
        mode: 'production',
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
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true
                }),
                new OptimizeCSSAssetsPlugin({})
            ],
            splitChunks: {
                chunks: 'async',
                minSize: 30000,
                minChunks: 1,
                maxAsyncRequests: 5,
                maxInitialRequests: 3,
                name: false,
                cacheGroups: {
                    vendor: {
                        name: 'vendor',
                        chunks: 'initial',
                        priority: -10,
                        reuseExistingChunk: false,
                        test: /node_modules\/(.*)\.js/
                    },
                    // styles: {
                    //     name: 'styles',
                    //     test: /\.(sass|css)$/,
                    //     chunks: 'all',
                    //     minChunks: 1,
                    //     reuseExistingChunk: true,
                    //     enforce: true
                    // }
                }
            }
        },
        module: {
            rules: [
                {
                    oneOf: [
                        {
                            test: /\.(tsx|ts|js|jsx)$/,
                            loader: 'happypack/loader?id=ts',
                            //loaders: ['babel-loader', 'ts-loader'],
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
                            loaders: [
                                MiniCssExtractPlugin.loader,
                                'happypack/loader?id=scss'
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
            new MiniCssExtractPlugin({
                filename: 'app.css',
                chunkFilename: 'app.[contenthash:12].css'
            }),
            new HappyPack({
                id: 'ts',
                loaders: [
                    'babel-loader',
                    {
                        path: 'ts-loader',
                        query: {happyPackMode: true}
                    }
                ],
                threadPool: happyThreadPool,
                verbose: true
            }),
            new HappyPack({
                id: 'scss',
                loaders: [
                    'css-loader',
                    {
                        loader: 'postcss-loader',
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
                                    zindex: false,
                                    reduceIdents: false
                                }),
                            ],
                            sourceMap: true
                        },
                    },
                    'sass-loader'
                ],
                threadPool: happyThreadPool
            }),
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
