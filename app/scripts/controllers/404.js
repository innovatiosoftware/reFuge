'use strict';

angular.module('reFugeApp')
    .controller('404ViewCtrl', function ($scope) {
        $scope.view = {
            viewTitle: "reFuge Map",
            viewSubTitle: "small text"
        };


    })
    .config(function ($routeProvider) {
        $routeProvider
            .when('/404', {
                templateUrl: '404.html',
                controller: '404ViewCtrl'
            });
    });


