angular.module('farmCart')
.controller('boothsCtrl', [
  '$scope',
  'booths',
  '$stateParams',
  'Auth',
  function($scope, booths, $stateParams, Auth) {
    $scope.market = booths;
    var currentId = $stateParams.id;
    Auth.currentUser().then(function(user) {
      $scope.user = user;
      console.log(user.id);
    });

    $scope.addBooth = function() {
      booths.addBooth(
        currentId,
        data = {
        name: $scope.name,
        user_id: $scope.user.id,
      });
    };
  },
]);
