(function() {
 
    "use strict";

    angular.module("flightManager").factory("flightService", function($http) {

        function getFlights() {
            return $http.get('http://localhost:8080/flights');
        }

        return {
            getFlights : getFlights
        }
    });
})();