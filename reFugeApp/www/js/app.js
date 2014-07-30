// Ionic Starter App
var lat = 18.45;
var long = -66.09;
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }

            document.addEventListener("deviceready", onDeviceReady, false);

            // device APIs are available
            //
            function onDeviceReady() {
                navigator.geolocation.getCurrentPosition(onSuccess, onError);
            }

            // onSuccess Geolocation
            //
            function onSuccess(position) {
                alert('Location found: ' + lat + "::" + long + '//' + position.coords.latitude + "::" + position.coords.longitude);
                if (lat == 0 && long == 0) {
                    lat = position.coords.latitude;
                    long = position.coords.longitude;
                }
            }

            // onError Callback receives a PositionError object
            //
            function onError(error) {
                console.log(error);
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })

            // Each tab has its own nav history stack:

            .state('tab.reFuge', {
                url: '/reFuge',
                views: {
                    'tab-reFuge': {
                        templateUrl: 'templates/tab-reFuge.html',
                        controller: 'reFugeCtrl'
                    }
                }
            })
            .state('tab.reFuge-detail', {
                url: '/reFuge/:refugeId',
                views: {
                    'tab-reFuge': {
                        templateUrl: 'templates/reFuge-detail.html',
                        controller: 'reFugeDetailCtrl'
                    }
                }
            })
            .state('tab.reFuge-feed', {
                url: '/reFugeFeed',
                views: {
                    'tab-reFuge': {
                        templateUrl: 'templates/feed-detail.html',
                        controller: 'reFugeFeeCtrl'
                    }
                }
            })

            .state('tab.friends', {
                url: '/friends',
                views: {
                    'tab-friends': {
                        templateUrl: 'templates/tab-friends.html',
                        controller: 'FriendsCtrl'
                    }
                }
            })
            .state('tab.friend-detail', {
                url: '/friend/:friendId',
                views: {
                    'tab-friends': {
                        templateUrl: 'templates/friend-detail.html',
                        controller: 'FriendDetailCtrl'
                    }
                }
            })

            .state('tab.account', {
                url: '/account',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/tab-account.html',
                        controller: 'AccountCtrl'
                    }
                }
            })

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/reFuge');

    });

