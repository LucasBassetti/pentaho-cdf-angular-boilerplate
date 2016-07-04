(function() {
    'use strict';

    angular.module('app').factory("Dashboard", DashboardService);

    DashboardService.$inject = [];

    function DashboardService() {

        var dashboard;
        require(['cdf/Dashboard.Bootstrap', 'cdf/components/TextComponent'],
            function(Dashboard, TextComponent) {
                dashboard = new Dashboard();
                dashboard.init();

                console.log(dashboard);
            }
        );

        var service = {
            addComponent: addComponent
        }

        return service;

        ////////////

        function addComponent() {
            console.log(this);
            console.log(dashboard);

        }
    }
})();
