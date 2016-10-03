# Pentaho CDF Angular Boilerplate

Boilerplate to Pentaho [BIServer](https://sourceforge.net/projects/pentaho/files/Business%20Intelligence%20Server/) using Angular and Community Dashboard Framework (CDF).

### Configuration file

* Open `gulp > import.js` and change the paths between `START` and `END` comments to your project paths.

``` javascript

/* START: change these paths */
var biServerCommandPath = '../biserver-ce/import-export.sh',  // bi-server import-export file path
    petahoURL           = 'http://localhost:8080/pentaho',    // server url
    pentahoUsername     = 'Admin',                            // pentaho username
    pentahoPassword     = 'password';                         // pantaho password
/* END: change these paths */

// replace command for windows os
if(os.platform() === 'win32') {
    biServerCommandPath = biServerCommandPath.replace('.sh', '.bat');
}

var pentaho_import  = biServerCommandPath
                      + ' --import'
                      + ' --url=' + petahoURL
                      + ' --username=' + pentahoUsername
                      + ' --password=' + pentahoPassword
                      + ' --overwrite=true --permission=true --retainOwnership=true',

    src_path          = "src",                                      // user source path

    /* START: change these paths */
    pentaho_path      = '/public/dashboards/myDashboard',           // pentaho path
    pentaho_dist_path = '/public/dashboards/myDashboard',           // pentaho dist path
    zipfile_path      = '../pentaho-cdf-angular-boilerplate/zip/',  // user file path
    /* END: change these paths */

    zip_path          = 'zip',    

    // pentaho paths
    path = {
        bower   : pentaho_path,                             // bower_components
        src     : pentaho_path,                             // scripts/html
        styles  : pentaho_path + '/' + src_path + '/app',   // styles
        html    : pentaho_path + '/' + src_path,            // html (new files)
        cda     : pentaho_path + '/cdas',                   // cda files
        dist    : pentaho_dist_path,                        // dist

        testHtml: pentaho_path + '/' + src_path,            // html (new files)
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

```
* **biServerCommandPath** - path of pentaho import-export{.sh|.bat} file
* **petahoURL** - pentaho server url
* **pentahoUsername** - pentaho username
* **pentahoPassword** - pentaho password
* **pentaho_import** - command to import zip files to pentaho [biserver](https://sourceforge.net/projects/pentaho/files/Business%20Intelligence%20Server/)
* **pentaho_path** - default pentaho path
* **pentaho_dist_path** - default pentaho dist path
* **zipfile_path** - user zip file path used in import command
* **zip_path** - zip path used in zip command

### Import bower files

``` shell
gulp import:bower
```

### Import cda files

``` shell
gulp import:cda
```

### Start watch to source files

``` shell
gulp serve
```

A index.xcdf will be imported in pentaho and you will use it to open your dashboard.

### Start tests server

``` shell
gulp test
```

This command will watch the tests files like ``` gulp serve ``` command. A test.xcdf will be imported in pentaho and you will use it to open your test dashboard.

### Build dist

``` shell
gulp
```

### Example of result of pentaho browse files

<img src="https://raw.githubusercontent.com/LucasBassetti/pentaho-cdf-angular-boilerplate/master/imgs/pentaho-browse-files.png"/>
