(function() {
    'use strict';

    angular.module('app', ['ngResource', 'ui.router']);

    angular.module('app').config(['$compileProvider', function ($compileProvider) {
        // remove ng-scope used to debug
        $compileProvider.debugInfoEnabled(false);
    }]);
    
})();
