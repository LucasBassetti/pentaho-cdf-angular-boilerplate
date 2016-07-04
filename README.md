# Pentaho CDF Angular Boilerplate

Boilerplate to Pentaho [BIServer](https://sourceforge.net/projects/pentaho/files/Business%20Intelligence%20Server/) using Angular and Community Dashboard Framework (CDF).

### Configuration file

* Open "gulp > import.js" and change paths.

``` javascript

var pentaho_import = '../biserver-ce/import-export.sh --import --url=http://localhost:8080/pentaho --username=Admin --password=password --overwrite=true --permission=true --retainOwnership=true',
    default_path = '/public/Steel\\ Wheels/Dashboards', // pentaho path
    default_file_path = '../pentaho/zip',                // user file path
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

```

* **pentaho_import** - command to import zip files to pentaho [biserver](https://sourceforge.net/projects/pentaho/files/Business%20Intelligence%20Server/)
* **default_path** - default pentaho path
* **default_file_path** - default user file path
* **default_zip_path** - default user zip path

### Import bower files

``` shell
gulp import:bower
```

### Start watch to source files

``` shell
gulp serve
```

### Build dist

``` shell
gulp
```
