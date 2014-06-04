'use strict';

angular.module('reFugeApp')
  .controller('MainCtrl', function ($scope,$rootScope) {


        $rootScope.geocodeF = function(){
            alert(" clicked!!");
            /*$rootScope.geocoder.geocode( { 'address': town+", PR"}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {

                    $rootScope.map = {
                        center: {
                            latitude: results[0].geometry.location.k,
                            longitude: results[0].geometry.location.A
                        },
                        zoom: 11
                    };
                    $rootScope.$apply();
                    Logger.info(JSON.stringify(results[0].geometry.location));
                } else {
                    alert('Geocode was not successful for the following reason: ' + status);
                }
            });*/

        };


  });


var geocode = function(town){
    window.alert(" clicked!!");
   /* $rootScope.geocoder.geocode( { 'address': town+", PR"}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {

            $rootScope.map = {
                center: {
                    latitude: results[0].geometry.location.k,
                    longitude: results[0].geometry.location.A
                },
                zoom: 11
            };
            $rootScope.$apply();
            Logger.info(JSON.stringify(results[0].geometry.location));
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });*/

}