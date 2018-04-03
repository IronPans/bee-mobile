const helpers = require('./helpers');
const path = require('path');
const pkg = require(path.join(process.cwd(), 'package.json'));

module.exports = {
    output: {
        library: 'Bee',
        libraryTarget: 'umd',
        filename: 'bee-mobile.js'
    },
    externals: [
        {
            react: {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react'
            }
        }, {
            'react-dom': {
                root: 'ReactDOM',
                commonjs2: 'react-dom',
                commonjs: 'react-dom',
                amd: 'react-dom'
            }
        }, {
            'react-motion': {
                root: 'ReactMotion',
                commonjs2: 'react-motion',
                commonjs: 'react-motion',
                amd: 'react-motion'
            }
        }
    ],
    module: {
        loaders: [
            {
                test: /\.(jsx?|tsx?)$/,
                loaders: ['babel-loader', 'ts-loader'],
                exclude: /node_modules/
            },
        ]
    },
    resolve: {
        modules: [helpers.root('./node_modules')],
        extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.js',
            '.jsx'
        ],
        alias: {
            [pkg.name]: process.cwd()
        }
    },
    watch: false
};