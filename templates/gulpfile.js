'use strict';

var browserify = require('browserify'),
    gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    babelify = require('babelify'),
    browserSync = require('browser-sync').create(),
    jshint = require('gulp-jshint');

gulp.task('javascript', ['lint'], function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: './app/config/routes.js',
    debug: true,
    // defining transforms here will avoid crashing your stream
    transform: [babelify]
  });

  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/dist/js/'));
});

gulp.task('lint', function() {
  return gulp.src('./app/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('serve', ['javascript'], function() {

    browserSync.init({
        server: "./public"
    });

    gulp.watch('app/**/*',['javascript'])
    gulp.watch('public/*.html').on('change', browserSync.reload);
    gulp.watch('public/dist/js/**/*').on('change', browserSync.reload);
});
