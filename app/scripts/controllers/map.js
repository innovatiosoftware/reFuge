'use strict';

angular.module('reFugeApp')
    .controller('MapViewCtrl', function ($scope) {
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




    })
    .config(function ($routeProvider) {
        $routeProvider
            .when('/map', {
                templateUrl: 'views/map.html',
                controller: 'MapViewCtrl'
            });
    });


