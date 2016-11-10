var argv = require('yargs').argv;

/* START: change these paths */

// bi-server import-export file path
var bi_server_command_path = '../repositories/biserver-ce/import-export.sh';

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
    zipfile_path      = '../pentaho-cdf-angular-boilerplate/zip/';

module.exports = {
    bi_server_command_path: bi_server_command_path,
    petaho_URL: petaho_URL,
    pentaho_username: pentaho_username,
    pentaho_password: pentaho_password,
    project_path: project_path,
    pentaho_path: pentaho_path,
    pentaho_dist_path: pentaho_dist_path,
    zipfile_path: zipfile_path
}

/* END: change these paths */
