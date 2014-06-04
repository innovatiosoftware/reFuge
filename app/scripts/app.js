'use strict';

angular.module('reFugeApp', ['ngRoute','google-maps'])
    .config(function ($routeProvider) {
        $routeProvider
            .otherwise({
                redirectTo: '/map'
            })
    });
