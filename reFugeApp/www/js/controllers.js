
var base = "http://5b64a1c5.ngrok.com/";

angular.module('starter.controllers', ['starter.services'])

    .controller('reFugeCtrl', function ($scope, $http) {
        $http({method: 'GET', url: base + 'getNearbyRefuges/' + lat +'/' + long }).
            success(function (data, status, headers, config) {
                $scope.refuges = data;
            }).
            error(function (data, status, headers, config) {
                console.log(status || ":" || data || "Request getAllRefuges failed");
            });
    })

    .controller('reFugeDetailCtrl', function ($scope, $stateParams, $http) {
        $http({method: 'GET', url: base + 'getRefugeById/' + $stateParams.refugeId + '/'}).
            success(function (data, status, headers, config) {
                $scope.refuge = data[0];
            }).
            error(function (data, status, headers, config) {
                console.log(status || ":" || data || "Request getRefugeById failed");
            });
    })

    .controller('reFugeFeeCtrl', function ($scope, $http) {
        var url = "feed://elnuevodia.feedsportal.com/c/34275/f/623466/index.rss";

        $http.jsonp(url).
            success(function(data, status, headers, config) {
                $scope.feed = {
                    title: 'DailyJS',
                    items: data.query.results.entry
                };
            }).
            error(function(data, status, headers, config) {
                console.error('Error fetching feed:', data);
            });
    })

    .controller('FriendsCtrl', function ($scope, Friends) {
        $scope.friends = Friends.all();
    })

    .controller('FriendDetailCtrl', function ($scope, $stateParams, Friends) {
        $scope.friend = Friends.get($stateParams.friendId);
    })

    .controller('AccountCtrl', function ($scope) {
    })
;
