var gulp  = require('gulp')
var shell = require('gulp-shell')

var pentaho_import  = '../biserver-ce/import-export.sh --import --url=http://localhost:8080/pentaho --username=Admin --password=password --overwrite=true --permission=true --retainOwnership=true',

    src_path        = "src",                                // user source path
    pentaho_path    = '/public/dashboards/myDashboard',     // pentaho path
    zipfile_path    = '../retail/zip',                      // user file path
    zip_path        = 'zip',                                // user zip path

    // pentaho paths
    path = {
        bower   : pentaho_path,                             // bower_components
        src     : pentaho_path,                             // scripts/html
        styles  : pentaho_path + '/' + src_path + '/app',   // styles
        html    : pentaho_path + '/' + src_path,            // html (new files)
        cda     : pentaho_path + '/cdas',                   // cda files
        dist    : pentaho_path,                             // dist

        testHtml: pentaho_path + '/' + src_path,            // html (new files)
        test    : pentaho_path,                             // scripts/html
    }

    // zip file paths
    file_path = {
        bower   : zipfile_path + '/bower_components.zip',   // bower_components
        src     : zipfile_path + '/src.zip',                // scripts/html
        styles  : zipfile_path + '/css.zip',                // styles
        html    : zipfile_path + '/index.zip',              // html (new files)
        cda     : zipfile_path + '/cda.zip',                // cda files
        dist    : zipfile_path + '/dist.zip',               // dist

        testHtml: zipfile_path + '/test.zip',               // html (new files)
        test    : zipfile_path + '/specs.zip',              // specs
    },

    // zip commands
    zip = {
        bower   : 'zip -r ' + zip_path + '/bower_components.zip ' + src_path + '/bower_components',
        src     : 'zip -r ' + zip_path + '/src.zip ' + src_path + '/app -x "*.sass*" -x "*.DS_Store"',
        styles  : 'zip -r ' + zip_path + '/css.zip -j .tmp/serve/app/index.css',
        html    : 'zip -r ' + zip_path + '/index.zip -j .tmp/serve/index.html .tmp/serve/index.xcdf',
        cda     : 'zip -r ' + zip_path + '/cda.zip -j ' + src_path + '/assets/cdas -x "*.DS_Store"',
        dist    : 'zip -r ' + zip_path + '/dist.zip dist',

        testHtml: 'zip -r ' + zip_path + '/test.zip -j .tmp/serve/test.html .tmp/serve/test.xcdf',
        test    : 'zip -r ' + zip_path + '/specs.zip ' + src_path + '/tests -x "*.DS_Store"',
    };

/* SOURCE TASKS
=================================== */

gulp.task('import:bower', shell.task([
    zip.bower,
    pentaho_import + ' --path=' + path.bower + ' --file-path=' + file_path.bower
]));

// *.js and *.html
gulp.task('import-src', shell.task([
    zip.src,
    pentaho_import + ' --path=' + path.src + ' --file-path=' + file_path.src
]));

// *.scss -> index.css
gulp.task('import-src-styles', shell.task([
    zip.styles,
    pentaho_import + ' --path=' + path.styles + ' --file-path=' + file_path.styles
]));

// index.html
gulp.task('import-src-html', shell.task([
    zip.html,
    pentaho_import + ' --path=' + path.html + ' --file-path=' + file_path.html
]));

// *.cda
gulp.task('import-cda', shell.task([
    zip.cda,
    pentaho_import + ' --path=' + path.cda + ' --file-path=' + file_path.cda
]));

/* TESTS TASKS
=================================== */

// index.html
gulp.task('import-test-html', shell.task([
    zip.testHtml,
    pentaho_import + ' --path=' + path.testHtml + ' --file-path=' + file_path.testHtml
]));

// *.spec.js
gulp.task('import-test', shell.task([
    zip.test,
    pentaho_import + ' --path=' + path.test + ' --file-path=' + file_path.test
]));

/* DIST TASKS
=================================== */

gulp.task('import:dist', ['clean'], function() {
    gulp.start('import-cda');
    gulp.start('import-dist');
});

gulp.task('import-dist', ['build'], shell.task([
    zip.dist,
    pentaho_import + ' --path=' + path.dist + ' --file-path=' + file_path.dist
]));
