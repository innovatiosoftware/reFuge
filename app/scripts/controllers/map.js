'use strict';

angular.module('reFugeApp')
    .controller('MapViewCtrl', function ($scope, Logger) {
        Logger.doLog = true;
        google.maps.visualRefresh = true;
        $scope.geocoder = new google.maps.Geocoder()
        $scope.show = false;
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
                    id: 1,
                    latitude: 18.186289,
                    longitude: -65.963859
                },
                {
                    id: 2,
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
            Logger.info(JSON.stringify(marker));
            marker.closeClick = function () {
                marker.showWindow = false;
                $scope.$apply();
            };
            marker.onClicked = function () {
                Logger.info("marker have been click");
                onMarkerClicked(marker, $scope, Logger);
            };
        });

        $scope.geocodeF = function (town) {
            $scope.geocoder.geocode({ 'address': town + ", PR"}, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {

                    $scope.map = {
                        center: {
                            latitude: results[0].geometry.location.k,
                            longitude: results[0].geometry.location.A
                        },
                        zoom: 11
                    };
                    $scope.$apply();
                    Logger.info(JSON.stringify(results[0].geometry.location));
                } else {
                    alert('Geocode was not successful for the following reason: ' + status);
                }
            });
        };


    })
    .
    config(function ($routeProvider) {
        $routeProvider
            .when('/map', {
                templateUrl: 'views/map.html',
                controller: 'MapViewCtrl'
            });
    });

var onMarkerClicked = function (marker, $scope, Logger) {
    $scope.show = true;
    $scope.$apply();
};



