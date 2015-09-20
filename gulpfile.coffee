gulp = require 'gulp'
run = require 'gulp-run'

gulp.task 'coveralls', ->

  gulp.src('./lcov-report.lcov')
    .pipe(run('./node_modules/.bin/coveralls'));
