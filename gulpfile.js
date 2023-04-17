'use strict';

var gulp = require('gulp');

const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function () {
    return gulp.src('./style/sass/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./style/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./style/sass/*.scss', gulp.series(['sass']));
});