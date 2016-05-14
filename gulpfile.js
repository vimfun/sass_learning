'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

var SASS_SRC_GLOB = './sass/**/*.scss'; 

gulp.task('sass', function () {
  return gulp.src(SASS_SRC_GLOB)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  // gulp.watch(SASS_SRC_GLOB, ['sass']);
  watch(SASS_SRC_GLOB, function () {
    gulp.start('sass');
  });
});
