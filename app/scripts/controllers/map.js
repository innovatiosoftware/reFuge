'use strict';

angular.module('reFugeApp')
    .controller('MapViewCtrl', function ($scope,Logger) {
        Logger.doLog = true
        // Enable the new Google Maps visuals until it gets enabled by default.
        // See http://googlegeodevelopers.blogspot.ca/2013/05/a-fresh-new-look-for-maps-api-for-all.html
        google.maps.visualRefresh = true;
       /* $scope.view = {
            viewTitle: "reFuge Map",
            viewSubTitle: "small text"
        };*/

        $scope.map = {
            center: {
                latitude: 45,
                longitude: -73
            },
            zoom: 8
        };
        $scope.markers ={};




    })
    .config(function ($routeProvider) {
        $routeProvider
            .when('/map', {
                templateUrl: 'views/map.html',
                controller: 'MapViewCtrl'
            });
    });


