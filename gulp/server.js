'use strict';

var gulp = require('gulp');

gulp.task('serve', ['inject', 'watch'], function () {
    gulp.start('import-src-html');
    gulp.start('import-src-styles');
    gulp.start('import-src');
    gulp.start('import-cda');
});

/* TEST SERVER
====================================================================== */

gulp.task('test', ['inject-test', 'watch-test'], function () {
    gulp.start('import-test-html');
    gulp.start('import-test');

    gulp.start('import-src-styles');
    gulp.start('import-src');
    gulp.start('import-cda');
});
