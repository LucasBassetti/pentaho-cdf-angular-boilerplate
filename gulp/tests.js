var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');


/* INJECT
====================================================================== */

gulp.task('inject-test-reload', ['inject-test'], function() {
    gulp.start('import-test-html');
    gulp.start('import-src');
    gulp.start('import-test');
});

gulp.task('inject-test', ['scripts', 'styles'], function () {
  var injectStyles = gulp.src([
    path.join(conf.paths.tmp, '/serve/app/**/*.css'),
    path.join('!' + conf.paths.tmp, '/serve/app/vendor.css')
  ], { read: false });

  var injectScripts = gulp.src([
    path.join(conf.paths.src, '/tests/**/*.spec.js'),
    path.join(conf.paths.src, '/tests/**/*.mock.js'),
    path.join(conf.paths.src, '/app/**/*.module.js'),
    path.join(conf.paths.src, '/app/**/*.js'),
  ])
  .pipe($.angularFilesort()).on('error', conf.errorHandler('AngularFilesort'));

  var injectOptions = {
    ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve')],
    addRootSlash: false
  };

  return gulp.src([
      path.join(conf.paths.src, '/test.html'),
      path.join(conf.paths.src, '/test.xcdf')
    ])
    .pipe($.inject(injectStyles, injectOptions))
    .pipe($.inject(injectScripts, injectOptions))
    .pipe(wiredep(_.extend({}, conf.wiredep)))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));
});

/* SCRIPTS
====================================================================== */

gulp.task('scripts-test-reload', ['scripts'], function() {
    gulp.start('import-src');
    gulp.start('import-test');
});

/* WATCH
====================================================================== */

gulp.task('watch-test', ['inject-test'], function () {

    gulp.watch([path.join(conf.paths.src, '/*.html'), 'bower.json'], ['inject-test-reload']);

    gulp.watch([
        path.join(conf.paths.src, '/app/**/*.css'),
        path.join(conf.paths.src, '/app/**/*.scss')
    ], function(event) {
        if(isOnlyChange(event)) {
            gulp.start('styles-reload');
        } else {
            gulp.start('inject-test-reload');
        }
    });

    gulp.watch([
        path.join(conf.paths.src, '/app/**/*.js'),
        path.join(conf.paths.src, '/tests/**/*.js')
    ], function(event) {
        if(isOnlyChange(event)) {
            gulp.start('scripts-test-reload');
        } else {
            gulp.start('inject-test-reload');
        }
    });

    gulp.watch(path.join(conf.paths.src, '/app/**/*.html'), function(event) {
        gulp.start('import-src');
    });

    gulp.watch(path.join(conf.paths.src, '/assets/**/*.cda'), function(event) {
        gulp.start('import-cda');
    });
});
