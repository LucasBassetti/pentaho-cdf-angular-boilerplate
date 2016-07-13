# Pentaho CDF Angular Boilerplate

Boilerplate to Pentaho [BIServer](https://sourceforge.net/projects/pentaho/files/Business%20Intelligence%20Server/) using Angular and Community Dashboard Framework (CDF).

### Configuration file

* Open "gulp > import.js" and change paths.

``` javascript

var pentaho_import  = '../biserver-ce/import-export.sh --import --url=http://localhost:8080/pentaho --username=Admin --password=password --overwrite=true --permission=true --retainOwnership=true',

    src_path        = "src",                                // user source path
    pentaho_path    = '/public/dashboards/retail',          // pentaho path
    zipfile_path    = '../retail/zip',                      // user zip file path used in import command
    zip_path        = 'zip',                                // user zip path used in zip command

    // pentaho paths
    path = {
        bower   : pentaho_path,                             // bower_components
        src     : pentaho_path,                             // scripts/html
        styles  : pentaho_path + '/src/app',                // styles
        html    : pentaho_path + '/src',                    // html (new files)
        cda     : pentaho_path + '/cdas',                   // cda files
        dist    : pentaho_path                              // dist
    }

    // zip file paths
    file_path = {
        bower   : zipfile_path + '/bower_components.zip',   // bower_components
        src     : zipfile_path + '/src.zip',                // scripts/html
        styles  : zipfile_path + '/css.zip',                // styles
        html    : zipfile_path + '/index.zip',              // html (new files)
        cda     : zipfile_path + '/cda.zip',                // cda files
        dist    : zipfile_path + '/dist.zip'                // dist
    },

    // zip commands
    zip = {
        bower   : 'zip -r ' + zip_path + '/bower_components.zip ' + src_path + '/bower_components',
        src     : 'zip -r ' + zip_path + '/src.zip ' + src_path + '/app -x "*.sass*" -x "*.DS_Store"',
        styles  : 'zip -r ' + zip_path + '/css.zip -j .tmp/serve/app/index.css',
        html    : 'zip -r ' + zip_path + '/index.zip -j .tmp/serve -x "*.css*"',
        cda     : 'zip -r ' + zip_path + '/cda.zip -j ' + src_path + '/assets/cdas -x "*.DS_Store"',
        dist    : 'zip -r ' + zip_path + '/dist.zip dist',
    };

```

* **pentaho_import** - command to import zip files to pentaho [biserver](https://sourceforge.net/projects/pentaho/files/Business%20Intelligence%20Server/)
* **pentaho_path** - default pentaho path
* **zipfile_path** - user zip file path used in import command
* **zip_path** - zip path used in zip command

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
