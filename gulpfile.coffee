gulp = require 'gulp'
coveralls = require 'gulp-coveralls'

gulp.task 'coveralls', ->
  gulp.src('./lcov-report.lcov').pipe(coveralls())
