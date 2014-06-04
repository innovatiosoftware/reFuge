
var base = "http://192.168.9.141:8002/";

angular.module('starter.controllers', ['starter.services'])

    .controller('reFugeCtrl', function ($scope, $http) {
        $http({method: 'GET', url: base + 'getAllRefuges/'}).
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

    .controller('FriendsCtrl', function ($scope, Friends) {
        $scope.friends = Friends.all();
    })

    .controller('FriendDetailCtrl', function ($scope, $stateParams, Friends) {
        $scope.friend = Friends.get($stateParams.friendId);
    })

    .controller('AccountCtrl', function ($scope) {
    })
;
