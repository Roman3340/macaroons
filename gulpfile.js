'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');
const cssmin = require('gulp-clean-css');
const rename = require('gulp-rename');


function defaultTask() {
    return gulp.src('./src/css/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'));
}

exports.default = defaultTask;

exports.watch = function () {
    gulp.watch('./src/css/*.less', gulp.series('default'));
}