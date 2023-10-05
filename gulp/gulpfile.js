'use strict'
//npm install npm install gulp npm start

//npm install  gulp-cli --save-dev
// npm install  gulp --save-dev
// npm i browser-sync --save-dev
//npm remove minify-js --save-dev
var sourcemaps = require('gulp-sourcemaps')
var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();// livereload
var plumber = require('gulp-plumber'); // dont stop with mistake
var csso = require('gulp-csso'); //min css
var uglify = require("gulp-uglify"); //min js
var rm = require( 'gulp-rm' ) // clear build folder
var autoprefixer = require( 'gulp-autoprefixer' ) // autoprefixer
var postcss= require( 'gulp-postcss' ) // post css
var mqpacker= require( 'css-mqpacker' ) // sotr css, media query




gulp.task('less', function() {
  return gulp.src('src/**/style-less.less')
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
  .pipe(uglify())
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

gulp.watch("src/**/*.less",  gulp.parallel('less'));
  // gulp.watch("src/*.html", ["html"]).on("change", browserSync.reload);
  // gulp.watch("src/*.html", ["html"]).on("change", browserSync.reload);
  // gulp.watch("src/**/*.{sass,scss}", ["sass"]).on('change', browserSync.reload);
});

  gulp.task('build',
   gulp.series(
    'clear',
    'html',
    'less',
    'css',
    'js'
    ));
