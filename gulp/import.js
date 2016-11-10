var gulp    = require('gulp'),
    shell   = require('gulp-shell'),
    os      = require('os');
    gulpZip = require('gulp-zip'),
    conf    = require('./import-conf');

/* START: change these paths */
var bi_server_command_path  = conf.bi_server_command_path
    petaho_URL              = conf.petaho_URL,
    pentaho_username        = conf.pentaho_username,
    pentaho_password        = conf.pentaho_password;
/* END: change these paths */

// replace command for windows os
if(os.platform() === 'win32') {
    bi_server_command_path = bi_server_command_path.replace('.sh', '.bat');
}

var pentaho_import  = bi_server_command_path
                      + ' --import'
                      + ' --url=' + petaho_URL
                      + ' --username=' + pentaho_username
                      + ' --password=' + pentaho_password
                      + ' --overwrite=true --permission=true --retainOwnership=true',

    project_path      = conf.project_path,
    pentaho_path      = conf.pentaho_path,
    pentaho_dist_path = conf.pentaho_dist_path,
    zipfile_path      = conf.zipfile_path,

    // pentaho paths
    path = {
        bower   : pentaho_path,                             // bower_components
        src     : pentaho_path,                             // scripts/html
        styles  : pentaho_path + '/src/app',                // styles
        html    : pentaho_path + '/src',                    // html (new files)
        cda     : pentaho_path + '/cdas',                   // cda files
        dist    : pentaho_dist_path,                        // dist

        testHtml: pentaho_path + '/src',                    // html (new files)
        test    : pentaho_path,                             // scripts/html
    };

// replace slash for windows os
if(os.platform() === 'win32') {
    zipfile_path = zipfile_path.replace(/\//g, '\\')
}

// zip file paths
var file_path = {
        bower   : zipfile_path + 'bower_components.zip',   // bower_components
        src     : zipfile_path + 'src.zip',                // scripts/html
        styles  : zipfile_path + 'css.zip',                // styles
        html    : zipfile_path + 'index.zip',              // html (new files)
        cda     : zipfile_path + 'cda.zip',                // cda files
        dist    : zipfile_path + 'dist.zip',               // dist

        testHtml: zipfile_path + 'test.zip',               // html (new files)
        test    : zipfile_path + 'specs.zip',              // specs
    };

/* SOURCE TASKS
=================================== */

gulp.task('zip:bower', function() {
    return gulp.src('./src/bower_components/**', {
            base: './'
        })
        .pipe(gulpZip('bower_components.zip'))
        .pipe(gulp.dest('./zip'));
});
gulp.task('import:bower', ['zip:bower'], shell.task([
    pentaho_import + ' --path=' + path.bower + ' --file-path=' + file_path.bower
]));

// *.js and *.html
gulp.task('zip:src', function() {
    return gulp.src('./src/app/**', {
            base: './'
        })
        .pipe(gulpZip('src.zip'))
        .pipe(gulp.dest('./zip'));
});
gulp.task('import-src', ['zip:src'], shell.task([
    pentaho_import + ' --path=' + path.src + ' --file-path=' + file_path.src
]));

// *.scss -> index.css
gulp.task('zip:src-style', function() {
    return gulp.src('./.tmp/serve/app/**')
        .pipe(gulpZip('css.zip'))
        .pipe(gulp.dest('./zip'));
});
gulp.task('import-src-styles', ['zip:src-style'], shell.task([
    pentaho_import + ' --path=' + path.styles + ' --file-path=' + file_path.styles
]));

// index.html
gulp.task('zip:src-index', function() {
    return gulp.src(['./.tmp/serve/**', '!./.tmp/serve/{app,app/**}'])
        .pipe(gulpZip('index.zip'))
        .pipe(gulp.dest('./zip'));
});
gulp.task('import-src-html', ['zip:src-index'], shell.task([
    pentaho_import + ' --path=' + path.html + ' --file-path=' + file_path.html
]));

// *.cda
gulp.task('zip:cda', function() {
    return gulp.src('./src/assets/cdas/**', {
            base: './src/assets/cdas'
        })
        .pipe(gulpZip('cda.zip'))
        .pipe(gulp.dest('./zip'));
});
gulp.task('import-cda', ['zip:cda'], shell.task([
    pentaho_import + ' --path=' + path.cda + ' --file-path=' + file_path.cda
]));

/* DIST TASKS
=================================== */

gulp.task('import:dist', ['clean'], function() {
    gulp.start('import-cda');
    gulp.start('build-dist');
});

gulp.task('build-dist', ['build'], function() {
    gulp.start('import-dist');
});

gulp.task('zip:dist', function() {
    return gulp.src(['./' + project_path + '/**', '!./' + project_path + '{/maps,/maps/**}'], {
            base: './'
        })
        .pipe(gulpZip('dist.zip'))
        .pipe(gulp.dest('./zip'));
});

gulp.task('import-dist', ['zip:dist'], shell.task([
    pentaho_import + ' --path=' + path.dist + ' --file-path=' + file_path.dist
]));

/* TESTS TASKS
=================================== */

// index.html
gulp.task('zip:test-html', function() {
    return gulp.src(['./.tmp/serve/test.html', './.tmp/serve/test.xcdf'])
        .pipe(gulpZip('test.zip'))
        .pipe(gulp.dest('./zip'));
});
gulp.task('import-test-html', ['zip:test-html'], shell.task([
    pentaho_import + ' --path=' + path.testHtml + ' --file-path=' + file_path.testHtml
]));

// *.spec.js
gulp.task('zip:test', function() {
    return gulp.src('./src/tests/jasmine/**', {
        base: './src/tests/jasmine'
    })
        .pipe(gulpZip('specs.zip'))
        .pipe(gulp.dest('./zip'));
});
gulp.task('import-test', ['zip:test'], shell.task([
    pentaho_import + ' --path=' + path.test + ' --file-path=' + file_path.test
]));
