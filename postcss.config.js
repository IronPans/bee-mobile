const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
module.exports = {
    plugins: [
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
        })]
};