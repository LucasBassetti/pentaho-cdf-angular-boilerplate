(function() {
    'use strict';

    // set title and viewport
    $('title').text('Dashboard title');
    $('head').append('<meta name="viewport" content="width=device-width">');

    var dashboard, components;

    // add your components here
    require(['cdf/Dashboard.Bootstrap', 'cdf/components/QueryComponent'],
        function(Dashboard, QueryComponent) {

        dashboard = Dashboard;
        components = {
            'QueryComponent': QueryComponent,
            // '<component1>': <component1>,
            // '<component2>': <component2>
        }

        bootstrap();
    });

    angular.module('app').run(runBlock);

    /** @ngInject */
    function runBlock(Dashboard, Components, $log) {

        Dashboard.setDashboard(new dashboard());
        Components.setComponentsClasses(components);

        $log.debug('runBlock end');
    }

    function bootstrap() {
        angular.element(document).ready(function() {
            angular.bootstrap(document, ["app"]);
        });
    }

})();
