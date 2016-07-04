var gulp  = require('gulp')
var shell = require('gulp-shell')

var pentaho_import = '../biserver-ce/import-export.sh --import --url=http://localhost:8080/pentaho --username=Admin --password=password --overwrite=true --permission=true --retainOwnership=true',
    default_path = '/public/Steel\\ Wheels/Dashboards', // pentaho path
    default_file_path = '../retail/zip',                // user file path
    default_zip_path = 'zip',                           // user zip path
    path = {                                // pentaho paths
        bower: default_path,                // bower_components
        src: default_path,                  // scripts/html
        styles: default_path + '/src/app',  // styles
        html: default_path + '/src',        // html (new files)
        dist: default_path                  // dist
    }
    file_path = {                                           // file paths
        bower: default_file_path + '/bower_components.zip', // bower_components
        src: default_file_path + '/src.zip',                // scripts/html
        styles: default_file_path + '/css.zip',             // styles
        html: default_file_path + '/index.zip',             // html (new files)
        dist: default_file_path + '/dist.zip'               // dist
    },
    zip = {     // zip commands
        bower: 'zip -r ' + default_zip_path + '/bower_components.zip src/bower_components',
        src: 'zip -r ' + default_zip_path + '/src.zip src/app -x "*.sass*" -x "*.DS_Store"',
        styles: 'zip -r ' + default_zip_path + '/css.zip -j .tmp/serve/app/index.css',
        html: 'zip -r ' + default_zip_path + '/index.zip -j .tmp/serve -x "*.css*"',
        dist: 'zip -r ' + default_zip_path + '/dist.zip dist',
    };

/*
    SOURCE
=================================== */

gulp.task('import:bower', shell.task([
    zip.bower,
    pentaho_import + ' --path=' + path.bower + ' --file-path=' + file_path.bower
]));

gulp.task('import-src', shell.task([
    zip.src,
    pentaho_import + ' --path=' + path.src + ' --file-path=' + file_path.src
]));

// index.css
gulp.task('import-src-styles', shell.task([
    zip.styles,
    pentaho_import + ' --path=' + path.styles + ' --file-path=' + file_path.styles
]));

// index.html
gulp.task('import-src-html', shell.task([
    zip.html,
    pentaho_import + ' --path=' + path.html + ' --file-path=' + file_path.html
]));

/*
    DIST
=================================== */

gulp.task('import:dist', ['clean'], function() {
    gulp.start('import-dist');
});

gulp.task('import-dist', ['build'], shell.task([
    zip.dist,
    pentaho_import + ' --path=' + path.dist + ' --file-path=' + file_path.dist
]));
