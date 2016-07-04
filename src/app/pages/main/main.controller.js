(function() {
    'use strict';

    angular.module('app').controller('MainController', MainController);

    MainController.$inject = ['Dashboard'];

    function MainController(Dashboard) {
        var vm = this;

        console.log(Dashboard);
        Dashboard.addComponent();
    }
})();
