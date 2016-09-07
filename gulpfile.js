'use strict'

const gulp = require('gulp');

gulp.task('Hello', function (callback) {
    console.log('Hello');
    callback();
});

gulp.task('promise', function () {
    return new Promise((resolve, reject) => {
            console.log('Promise');
        resolve('result');
    });
});