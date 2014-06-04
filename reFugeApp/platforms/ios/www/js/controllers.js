angular.module('starter.controllers', [])

    .controller('reFugeCtrl', function ($scope, Refuges) {
        $scope.refuges = Refuges.all();
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
