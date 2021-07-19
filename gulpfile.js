'use strict';

const { src, dest, parallel, series, watch } = require('gulp');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();
const compiler = require('webpack');
const copy = require('gulp-copy');
const eslint = require('gulp-eslint');
const image = require('gulp-image');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const webpack = require('webpack-stream');
const webpack4 = require('webpack');

/**
 * Setup server using BrowserSync.
 */
function server() {
  browserSync.init({
    proxy: 'http://localhost/80twentyweb',
    notify: true
  });
}

/**
 * Copy font files to dist/ folder.
 */
function copyFonts() {
  return src('./assets/fonts/*')
    .pipe(dest('./assets/dist/fonts/'));
}


/**
 * Transform .SCSS files to .CSS
 */
function styles() {
  let plugins = [
    autoprefixer({browsers: ['last 3 versions']})
  ];

  return src('./assets/styles/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: [] 
    }).on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(rename({
      suffix: '.min' 
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./assets/dist/css/'))
    .pipe(browserSync.stream());
}

/**
 * Javascript linter.
 */
function scriptsLint() {
  return src('./assets/scripts/**/*.js')
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
}

/**
 * Javascript transpiler. Transform ESNext to ES2015.
 */
function scripts() {

  return src('./src/*.js')
    .pipe(plumber())
    .pipe(webpack({
      mode: process.NODE_ENV || 'development',
      entry: {
        app: './src/app.js'
      },
      output: {
        filename: '[name].min.js'
      },
      watch: true,
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: '/node_modules/',
            loader: 'babel-loader'
          }
        ]
      },
      devtool: 'source-map',
      plugins: [
        new webpack4.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery'
        }),
      ]
    }, compiler))
    .pipe(dest('./dist/'))
    .pipe(browserSync.stream());
}

/**
 * Watch file changes and perform the necessary tasks.
 */
function watchFiles() {
  watch('./assets/styles/**/*.scss', series(styles));
  watch('./assets/src/**/*.js', series(scriptsLint, scripts));
  watch('**/*.html').on('change', browserSync.reload);
}

// Build production-ready assets. Run `gulp build`
exports.build = parallel(styles, series(scriptsLint, scripts));

// Development tasks. Run `gulp default` or `gulp`
exports.default = parallel(styles, series(scriptsLint, scripts), server, watchFiles);
