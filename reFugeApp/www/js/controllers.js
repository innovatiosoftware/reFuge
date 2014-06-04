angular.module('starter.controllers', ['starter.services'])

    .controller('reFugeCtrl', function ($scope, $http) {
        var base = 'http://192.168.9.141:8002';
        $http({method: 'GET', url: base + '/getAllRefuges'}).
            success(function (data, status, headers, config) {
                $scope.refuges = data;
            }).
            error(function (data, status, headers, config) {
                console.log(status || ":" || data || "Request failed");
            });
    })

    .controller('reFugeDetailCtrl', function ($scope, $stateParams, Refuges) {
        $scope.refuge = Refuges.get($stateParams.refugeId);
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
