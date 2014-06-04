/**
 * Created by Edxe on 6/4/14.
 */
(function () {
    'use strict';
    angular.module('reFugeApp')
        .factory('DataService', function ($resource) {
            return $resource('role/:id/', {id: '@id'}, {
                'query': {method: 'GET', isArray: true},
                'update': {method: 'PUT'}
            });
        });
}());