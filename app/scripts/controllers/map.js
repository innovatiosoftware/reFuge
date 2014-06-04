'use strict';

angular.module('reFugeApp')
    .controller('MapViewCtrl', function ($scope, Logger, $http) {
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
        $scope.current={};
        $scope.markers = [];
        $http({method: 'GET', url: 'http://fran.local:8002/getAllRefuges/'})
            .success(function (data, status, headers, config) {
                _.each(data, function (d) {

                    var ret = {
                        latitude: d.LATITUDE,
                        longitude: d.LONGITUDE,
                        data: d,
                        id: d.ID
                    };
                    $scope.markers.push(ret);

                });
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
            })

            .error(function (data, status, headers, config) {

            });

        $http({method: 'GET', url: 'http://fran.local:8002/getAllMunicipalities/'})
            .success(function (data, status, headers, config) {
                $scope.mun = data;
            })
            .error(function (data, status, headers, config) {
            });


//make other opacity less when searching a zone
        $scope.marker = {
            options: {
                optimized: true,
                opacity: .9,
                animation: 'DROP'

            }
        };


        $scope.geocodeF = function (town) {
            Logger.info("geocode for " + town);
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
    if (!$scope.show)
    $scope.show = true;
    $scope.current = marker.data;
    var iNum = Math.floor((Math.random()*3)+1);
    var ext = ".jpg";
    if(iNum == 1){
        ext = ".png";
    }
    $scope.image = "r"+iNum+ext;
    Logger.info($scope.image);
    $scope.$apply();

};



