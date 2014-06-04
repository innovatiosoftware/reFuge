'use strict';

angular.module('reFugeApp')
    .controller('DetailsViewCtrl', function ($scope) {



    })
    .config(function ($routeProvider) {
        $routeProvider
            .when('/detail', {
                templateUrl: 'views/detail.html',
                controller: 'DetailViewCtrl'
            });
    });


