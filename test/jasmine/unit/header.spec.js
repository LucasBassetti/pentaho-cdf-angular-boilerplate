(function() {
    'use strict';

    describe("HeaderController", function() {
        var rootScope,
            scope,
            controller;

        beforeEach(function() {
            module('app');

            inject(function($controller, $rootScope) {
                rootScope = $rootScope;
                scope = $rootScope.$new();

                controller = $controller('HeaderController', {
                    $scope: scope,
                });
            });
        });

        it('Should be true', function() {
            expect(true).toBe(true);
        });
    });
})();
