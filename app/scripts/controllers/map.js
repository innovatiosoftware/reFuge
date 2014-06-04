'use strict';

angular.module('reFugeApp')
    .controller('MapViewCtrl', function ($scope, Logger) {
        Logger.doLog = true
        // Enable the new Google Maps visuals until it gets enabled by default.
        // See http://googlegeodevelopers.blogspot.ca/2013/05/a-fresh-new-look-for-maps-api-for-all.html
        google.maps.visualRefresh = true;
        $scope.map = {
            center: {
                latitude: 18.2006761,
                longitude: -66.408293
            },
            zoom: 10
        };
        $scope.markers =
            [
                {
                    latitude: 18.186289,
                    longitude: -65.963859
                },
                {
                    latitude: 18.120232,
                    longitude: -65.989962
                }
            ]
        ;
//make other opacity less when searching a zone
        $scope.marker = {
            options: {
                optimized: true,
                opacity: .9,
                animation: 'DROP'

            }
        };


        _.each($scope.markers, function (marker) {
            Logger.info("dd");
            marker.closeClick = function () {
                marker.showWindow = false;
                $scope.$apply();
            };
            marker.onClicked = function () {
                Logger.info("dd2");
//                onMarkerClicked(marker);
            };
        });


    })
    .
    config(function ($routeProvider) {
        $routeProvider
            .when('/map', {
                templateUrl: 'views/map.html',
                controller: 'MapViewCtrl'
            });
    });

var onMarkerClicked = function (marker) {
//    marker.showWindow = true;
//    $scope.$apply();
    window.alert("Marker: lat: " + marker.latitude + ", lon: " + marker.longitude + " clicked!!")
};
