var fs = require('fs');
var gulp = require('gulp');
var runSequence = require('run-sequence');

var eslint = require('gulp-eslint');
var babel = require("gulp-babel");
var sourcemaps = require("gulp-sourcemaps");

gulp.task('lint', function() {
  var eslintrc = './.eslintrc';

  return gulp.src(['src/**/*.js'])
    .pipe(eslint(eslintrc))
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('build', function() {
  var babelConfig = JSON.parse(fs.readFileSync('./.babelrc', "utf8"));  

  return gulp.src(['src/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(babel(babelConfig))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build'));
});

gulp.task('default', function() {
  return runSequence('lint', 'build');
});

