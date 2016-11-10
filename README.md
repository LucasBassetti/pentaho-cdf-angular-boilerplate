# Pentaho CDF Angular Boilerplate

Boilerplate to Pentaho [BIServer](https://sourceforge.net/projects/pentaho/files/Business%20Intelligence%20Server/) using Angular and Community Dashboard Framework (CDF).

### Configuration file

* Run `npm install` and `bower install` to install dependencies
* Open `gulp > import-conf.js` and change the paths between `START` and `END` comments to your project paths.

``` javascript

/* START: change these paths */

// bi-server import-export file path
var bi_server_command_path = '../../repositories/biserver-ce/import-export.sh';

// Dev (default) environment
var petaho_URL           = 'http://localhost:8080/pentaho',
    pentaho_username     = 'Admin',
    pentaho_password     = 'password';

// Set homologation environment and run with -e flag (ex.: gulp -e hom)
if(argv.e === 'hom') {
    petaho_URL           = '',
    pentaho_username     = '',
    pentaho_password     = '';
}
// Set production environment and run with -e flag (ex.: gulp -e prod)
else if(argv.e === 'prod') {
    petaho_URL           = '',
    pentaho_username     = '',
    pentaho_password     = '';
}

    // Pentaho project path. This will generate the root folder of your
    // project in pentaho bi-server
var project_path      = 'myDashboard',
    // Pentaho source path. This path will be used to generate a development
    // folder in pentaho bi-server
    pentaho_path      = '/' + project_path,
    // Pentaho dist path. This path will be used to generate a dist (production)
    // folder in pentaho bi-server
    pentaho_dist_path = '/',
    // User file path. NOTE: this path should be relative to your bi-server
    zipfile_path      = '../../seed/pentaho/zip/';

/* END: change these paths */

```
* **bi_server_command_path** - path of pentaho import-export{.sh|.bat} file
* **petaho_URL** - pentaho server url
* **pentaho_username** - pentaho username
* **pentaho_password** - pentaho password
* **pentaho_import** - command to import zip files to pentaho [biserver](https://sourceforge.net/projects/pentaho/files/Business%20Intelligence%20Server/)
* **pentaho_path** - default pentaho path
* **pentaho_dist_path** - default pentaho dist path
* **zipfile_path** - user zip file path used in import command

### Add new pentaho components

Open the `index.run.js` and see how to add new pentaho components.

### Create CDA files

To create cda files, you must use the folder `assets/cdas`. These files will be used in the `components.service.js`, you need change the `_cdasPath` present in the file to your dashboard pentaho path.

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

### Build dist

* Dev environment
``` shell
gulp
```
* Hom environment (the -e flag can be used in all tasks)
``` shell
gulp -e hom
```
* Prod environment (the -e flag can be used in all tasks)
``` shell
gulp -e prod
```

### Start tests server

``` shell
gulp test
```

This command will watch the tests files like ``` gulp serve ``` command. A test.xcdf will be imported in pentaho and you will use it to open your test dashboard.

### Known issues

1. The command `gulp import:bower` sometimes don't import all files. When this happens, you need run this command more times until all files be imported.

2. When you install some bower component with `bower install` and an error with `define` expression appear, you should open the file imported in `bower_components` and remove all `define(...)` present in the archive. This error is some incompatibility with pentaho requirejs.

### Example of result of pentaho browse files

<img src="https://raw.githubusercontent.com/LucasBassetti/pentaho-cdf-angular-boilerplate/master/imgs/pentaho-browse-files.png"/>
