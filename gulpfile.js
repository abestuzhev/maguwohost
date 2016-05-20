//plugins for development
var gulp = require('gulp'),
    // rimraf = require('rimraf'),
    sass = require('gulp-sass'),
    // inlineimage = require('gulp-inline-image'),
    prefix = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync').create();
    // concat = require('gulp-concat');

//plugins for buld
// var purify = require('gulp-purifycss'),
//     uglify = require('gulp-uglify'),
//     imagemint = require('gulp-imagemint'),
//     pngquant = require('imagemint-pngquant'),
//     csso = require('gulp-csso');

//plugins for testing
// var html5lint = require('gulp-html5-lint');

var srcDir = 'src/';

gulp.task('sass', function(){
  return gulp.src(srcDir + 'scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(plumber())
    .pipe(prefix('last 3 version'))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream())
});

gulp.task('html', function(){
  return gulp.src('**/*.html')
    .pipe(plumber())
    .pipe(gulp.dest('**/*.html'))
    .pipe(browserSync.stream())
});

gulp.task('browser-sync', function(){
  browserSync.init({
    port: 1337,
    server: {
      baseDir: ''
    }
  })
});

gulp.task('watch', function(){
  gulp.watch(srcDir + 'scss/**/*.scss', ['sass'])
  gulp.watch('**/*.html', ['html'])
});

gulp.task('default', ['sass', 'html', 'watch', 'browser-sync'])
