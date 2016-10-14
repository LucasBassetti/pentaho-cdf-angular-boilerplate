(function() {
    'use strict';

    /**
     * @memberof app
     * @ngdoc service
     * @name Components
     * @description Components service to handle with components
     * */
    angular.module('app').factory("Components", ComponentsService);

    ComponentsService.$inject = [];

    function ComponentsService() {

        var _cdasPath = '/MyDashboard/cdas', // change to your cda pentaho path
            _classes = {},
            _components = {};

        var service = {
            setComponentsClasses: setComponentsClasses,
            newComponent: newComponent
        }

        return service;

        ////////////

        /**
         * @memberof Components
         * @function setComponentsClasses
         * @description set component classes used to instanciate new compoenents
         * @param {Object} components - components classes (ex.: QueryComponent)
         */
        function setComponentsClasses(components) {
            for(var component in components) {
                _classes[component] = components[component];
            }
        }

        /**
         * @memberof Components
         * @function newComponent
         * @description create a new component
         * @param {String} componentClass - component class (ex.: QueryComponent)
         * @param {String} id - component id
         * @param {Object} options - component options
         */
        function newComponent(componentClass, id, options) {
            options.queryDefinition.path = _cdasPath + options.queryDefinition.path;
            _components[id] = new _classes[componentClass](options);

            return _components[id];
        }

    }
})();
