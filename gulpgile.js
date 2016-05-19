//plugins for development
var gulp = require('gulp'),
    // rimraf = require('rimraf'),
    sass = require('gulp-sass'),
    // inlineimage = require('gulp-inline-image'),
    prefix = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    dirSynk = require('browser-sync').creat(),
    concat = require('gulp-concat');

//plugins for buld
// var purify = require('gulp-purifycss'),
//     uglify = require('gulp-uglify'),
//     imagemint = require('gulp-imagemint'),
//     pngquant = require('imagemint-pngquant'),
//     csso = require('gulp-csso');

//plugins for testing
// var html5lint = require('gulp-html5-lint');

var srcDir = 'src/';
