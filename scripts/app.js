angular
    .module("flightManager", ["ngMaterial"])
    .config(function($mdThemingProvider) {

        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('orange');
});