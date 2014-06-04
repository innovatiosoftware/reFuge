'use strict';

angular.module('reFugeApp', ['ngRoute','google-maps','ngResource'])
    .config(function ($routeProvider) {
        $routeProvider
            .otherwise({
                redirectTo: '/map'
            })
    });
