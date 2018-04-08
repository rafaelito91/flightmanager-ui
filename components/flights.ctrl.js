(function() {

    "use strict";

    angular.module("flightManager").controller("flightsCtrl", function($scope, flightService) {
        flightService.getFlights().then(function(flights) {
            $scope.flights = flights.data;
        });
    });
})();