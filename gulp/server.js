'use strict';

var gulp = require('gulp');

gulp.task('serve', ['inject', 'watch'], function () {
    gulp.start('import-src-html');
    gulp.start('import-src-styles');
    gulp.start('import-src');
    gulp.start('import-cda');
});
