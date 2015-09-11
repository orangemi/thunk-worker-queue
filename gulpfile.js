'use strict'

const gulp = require('gulp')
const mocha = require('gulp-mocha')
const gulpSequence = require('gulp-sequence')

gulp.task('mocha', function () {
  return gulp.src('test/*.js', {read: false})
    .pipe(mocha({timeout: 3600 * 1000}))
})

gulp.task('exit', function (callback) {
  callback()
  process.exit(0)
})

gulp.task('default', ['test'])

gulp.task('test', gulpSequence('mocha', 'exit'))
