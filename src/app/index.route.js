(function() {
    'use strict';

    angular
    .module('app')
    .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider

        .state('page', {
            abstract: true,
            url: "/index",
            templateUrl: "app/common/content.html"
        })
        // Empty Layout
        .state('page.empty', {
            url: "/empty",
            templateUrl: "app/pages/empty/empty.html",
            data: { pageTitle: 'Empty view' }
        })
        // Main
        .state('page.main', {
            url: "/main",
            templateUrl: "app/pages/main/main.html"
        })

        $urlRouterProvider.otherwise('/index/main');
    }

})();
