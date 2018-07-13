const gulp = require('gulp');
const del = require('del');
const webpackStream = require('webpack-stream');
const runSequence = require('run-sequence');
const loadPlugins = require('gulp-load-plugins');
const $ = loadPlugins();

const tsProject = $.typescript.createProject('tsconfig.build.json');
const buildConfig = require('./config/webpack.build');
const pkg = require('./package.json');

const prod = process.env.NODE_ENV === 'production';
const paths = {
    src: {
        build: 'src/components/bee-mobile.tsx'
    },
    dist: {
        docs: prod ? './www/react' : './www',
        build: './dist',
        lib: './lib'
    },
    scss: {
        css: [
            'src/styles/common/mixin.scss',
            'src/styles/common/variables.scss',
            'src/styles/Base.scss',
            'src/styles/Grid.scss',
            'src/styles/components/*.scss'
        ],
        copy: [
            './src/styles/**/*.scss'
        ]
    }
};
const banner = ['/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @author <%= pkg.author %>',
    ' * @version v<%= pkg.version %>',
    ' * @link <%= pkg.homepage %>',
    ' * @license <%= pkg.license %>',
    ' */',
    ''
].join('\n');

gulp.task('build:pack', () => {
    return gulp.src(paths.src.build)
        .pipe(webpackStream(buildConfig, require("webpack")))
        .pipe($.header(banner, { pkg: pkg }))
        .pipe(gulp.dest(paths.dist.build))
        .pipe($.uglify())
        .on('error', function (err) { $.util.log($.util.colors.red('[Error]'), err.toString()); })
        .pipe($.rename({ suffix: '.min' }))
        .pipe($.header(banner, { pkg: pkg }))
        .pipe(gulp.dest(paths.dist.build))
        .pipe($.size({ showFiles: true, title: 'minified' }))
        .pipe($.size({ showFiles: true, gzip: true, title: 'gzipped' }));
});

gulp.task('build:tsx', () => {
    return gulp.src(['src/components/**/*.tsx'])
        .pipe($.sourcemaps.init())
        .pipe(tsProject())
        .pipe($.if((file) => {
            return file.path.indexOf('modules.tsx') > -1;
        }, $.replace('__VERSION__', pkg.version)))
        // .pipe($.babel())
        .pipe($.sourcemaps.write())
        .on('error', function (err) { $.util.log($.util.colors.red('[Error]'), err.toString()); })
        .pipe(gulp.dest(paths.dist.lib));
});

gulp.task('sass-css', () => {
    return gulp.src('./src/styles/ui.scss')
        .pipe($.sourcemaps.init())
        .pipe($.sass().on('error', $.sass.logError))
        // 去掉css注释
        .pipe($.stripCssComments())
        .pipe($.autoprefixer('last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe($.sourcemaps.write())
        .pipe($.header(banner, { pkg: pkg }))
        .pipe($.concat('bee-mobile.css'))
        .pipe(gulp.dest('./dist'))
        .pipe($.rename({ suffix: '.min' }))
        .pipe($.uglifycss({ uglyComments: true }))
        .pipe($.minifyCss())
        .pipe($.header(banner, { pkg: pkg }))
        .pipe(gulp.dest(paths.dist.build));
});

gulp.task('copy', () => {
    return gulp.src(paths.scss.copy)
        .pipe(gulp.dest('./lib/scss'));
});

gulp.task('clean:scss', () => {
    del(['dist/bee-mobile.scss'], () => {
    });
});

gulp.task('build', (cb) => {
    runSequence(
        'clean',
        ['build:pack', 'build:tsx'],
        'sass-css', 'copy', 'clean:scss',
        cb);
});

gulp.task('clean', () => {
    return del([
        paths.dist.lib,
        paths.dist.build
    ]);
});

gulp.task('sass:watch', () => {
    gulp.watch(paths.scss.css, ['sass']);
});

// 监听任务时先执行一次编译
gulp.task('default', ['build'], () => {
    // gulp.start('sass');
    console.log('Finished!');
});