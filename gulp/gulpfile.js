//eslint-disable
// 'use strict'
//npm install npm install gulp npm start

//npm install  gulp-cli --save-dev
// npm install  gulp --save-dev
// npm i browser-sync --save-dev
//npm remove minify-js --save-dev
const sourcemaps = require('gulp-sourcemaps');
const gulp = require('gulp');
const less = require('gulp-less');
const browserSync = require('browser-sync').create();// livereload
const plumber = require('gulp-plumber'); // dont stop with mistake
const csso = require('gulp-csso'); //min css
const uglify = require("gulp-uglify"); //min js
const rm = require( 'gulp-rm' ); // clear build folder
const autoprefixer = require( 'gulp-autoprefixer' ) // autoprefixer
const postcss= require( 'gulp-postcss' ) // post css
const mqpacker= require( 'css-mqpacker' ) // sotr css, media query


var rename = require("gulp-rename");
var concat = require('gulp-concat');

const cleanCSS = require('gulp-clean-css');

gulp.task('less', function() {
  return gulp.src('src/**/style.less')
  .pipe(plumber())
  .pipe(less())
  .pipe(sourcemaps.init())
    // .pipe(postcss([ autoprefixer() ]))

    // .pipe(postcss([ autoprefixer() ]))
    .pipe(autoprefixer({
      cascade: true
    }))
    .pipe(postcss([
      mqpacker({ sort: true })
    ])
    )
    .pipe(sourcemaps.write('.'))
  // .pipe(csso())
  // .pipe(cleanCSS({removeDuplicateRules: 'true'}))
  // .pipe(concat('style-less.css'))
  .pipe(rename("less.css"))
  .pipe(gulp.dest('./build'))
  .pipe(browserSync.reload({
   stream: true
  }))
 });


gulp.task('css', function() {
  return gulp.src('src/**/style.css')
  .pipe(plumber())
    .pipe(autoprefixer({

      cascade: true
    }))
 .pipe(postcss([
      mqpacker({ sort: true })
      ])
    )
  // .pipe(csso())
  .pipe(gulp.dest('./build'))
  .pipe(browserSync.reload({
   stream: true
  }))
 });

gulp.task('js', function() {
  return gulp.src('src/**/app.js')
  .pipe(plumber())
  // .pipe(uglify())
  .pipe(gulp.dest('./build'))
  .pipe(browserSync.reload({
   stream: true
  }))
 });

 gulp.task('flex-style', function() {
  return gulp.src('src/**/flex-style.css')
  .pipe(autoprefixer({

    cascade: true,
    flexbox: true,
    grid: "autoplace",
    supports: false,
  }))
  .pipe(postcss([
    mqpacker({ sort: true })
    ])
  )
  .pipe(cleanCSS({
    breaks: {
      afterAtRule: 2,
      afterBlockBegins: 1, // 1 is synonymous with `true`
      afterBlockEnds: 2,
      afterComment: 1,
      afterProperty: 1,
      afterRuleBegins: 1,
      afterRuleEnds: 1,
      beforeBlockEnds: 1,
      betweenSelectors: 0 // 0 is synonymous with `false`
    },
    format: 'beautify',
    all:false,
    removeDuplicateFontRules: true, // controls duplicate `@font-face` removing; defaults to true
    removeDuplicateMediaBlocks: true, // controls duplicate `@media` removing; defaults to true
    removeDuplicateRules: true, // controls duplicate rules removing; defaults to true
  }))
  .pipe(csso())
  .pipe(gulp.dest('./build'))

  .pipe(browserSync.reload({
   stream: true
  }))
 });

 gulp.task('html', function() {
  return gulp.src('src/**/index.html')
  .pipe(gulp.dest('./build'))
  .pipe(browserSync.reload({
   stream: true
  }))
 });

 gulp.task('json-main', function() {
  return gulp.src(['src/**/main-new-function.js'])
  .pipe(uglify())
  .pipe(gulp.dest('./build'))
  .pipe(browserSync.reload({
   stream: true
  }))
 });

 gulp.task('json', function() {
  return gulp.src(['src/**/*.json'])
  .pipe(gulp.dest('./build'))
  .pipe(browserSync.reload({
   stream: true
  }))
 });
gulp.task('clear', function() {
  return gulp.src( 'build/**/*', { read: false })
  .pipe( rm({
   async: true
  }) )
 })


gulp.task('serve', function () {
 browserSync.init({
      server: {
        baseDir: 'build'
      },
      notify: false,
      open: true,
      ui: false
    }),

gulp.watch("src/**/*.html",  gulp.parallel('html'));
gulp.watch("src/**/*.css",  gulp.parallel('css'));
gulp.watch("src/**/*.js",  gulp.parallel('js'));
gulp.watch("src/**/*.json",  gulp.parallel('json'));
gulp.watch("src/**/main-new-function.js",  gulp.parallel('json-main'));


gulp.watch("src/**/flex-style.css",  gulp.parallel('flex-style'));

gulp.watch("src/**/*.less",  gulp.parallel('less'));
  // gulp.watch("src/*.html", ["html"]).on("change", browserSync.reload);
  // gulp.watch("src/*.html", ["html"]).on("change", browserSync.reload);
  // gulp.watch("src/**/*.{sass,scss}", ["sass"]).on('change', browserSync.reload);
});

  gulp.task('build',
   gulp.series(
    'clear',
    'html',
    'flex-style',
    'json-main',
    'less',
    'css',
    'json',
    'js'
    ));
