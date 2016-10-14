(function() {
    'use strict';

    /**
     * @memberof app
     * @ngdoc service
     * @name Dashboard
     * @description Dashboard service to handle with dashboard
     * */
    angular.module('app').factory("Dashboard", DashboardService);

    DashboardService.$inject = [];

    function DashboardService() {

        var _dashboard;

        var service = {
            setDashboard: setDashboard,
            init: init,
            hasComponent: hasComponent,
            addComponent: addComponent,
            removeComponent: removeComponent,
            setParameters: setParameters,
            setParameter: setParameter,
            fireChanges: fireChanges,
            fireChange: fireChange
        }

        return service;

        ////////////

        /**
         * @memberof Dashboard
         * @function setDashboard
         * @description set dashboard
         * @param {Object} dashboard - dashboard object
         */
        function setDashboard(dashboard) {
            this._dashboard = dashboard;
        }

        /**
         * @memberof Dashboard
         * @function init
         * @description init dashboard
         */
        function init() {
            this._dashboard.init();
        }

        /**
         * @memberof Dashboard
         * @function hasComponent
         * @description check if dashboard has the component
         * @param {String} componentName - component name
         * @returns {Boolean} hasComponent true or false
         */
        function hasComponent(componentName) {
            var components = this._dashboard.components,
                hasComponent = false;

            if(components) {
                for(var i = 0, len = components.length; i < len; i++) {
                    if(components[i].name === componentName) {
                        hasComponent = true;
                    }
                }
            }

            return hasComponent;
        }

        /**
         * @memberof Dashboard
         * @function addComponent
         * @description add component to dashboard
         * @param {Object} component - component
         */
        function addComponent(component) {
            this._dashboard.addComponent(component);
        }

        /**
         * @memberof Dashboard
         * @function removeComponent
         * @description remove component to dashboard
         * @param {String} componentName - component name
         */
        function removeComponent(componentName) {
            this._dashboard.removeComponent(componentName);
        }

        /**
         * @memberof Dashboard
         * @function setParameters
         * @description set component params
         * @param {Array} data - array of component params and values
         */
        function setParameters(data) {
            for(var i = 0, len = data.length; i < len; i++) {
                this._dashboard.setParameter(data[i].param, data[i].value);
            }
        }

        /**
         * @memberof Dashboard
         * @function setParameters
         * @description set component params
         * @param {String} param - param name
         * @param {All} value - param value
         */
        function setParameter(param, value) {
            this._dashboard.setParameter(param, value);
        }

        /**
         * @memberof Dashboard
         * @function fireChanges
         * @description fire component param changes
         * @param {Array} data - array of component params and values
         */
        function fireChanges(data) {
            for(var i = 0, len = data.length; i < len; i++) {
                this._dashboard.fireChange(data[i].param, data[i].value);
            }
        }

        /**
         * @memberof Dashboard
         * @function fireChange
         * @description fire component param change
         * @param {String} param - param name
         * @param {All} value - param value
         */
        function fireChange(param, value) {
            this._dashboard.fireChange(param, value);
        }
    }
})();
