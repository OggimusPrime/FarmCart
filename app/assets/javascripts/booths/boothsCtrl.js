angular.module('farmCart')
.controller('boothsCtrl', [
  '$scope',
  'booths',
  '$stateParams',
  function($scope, booths, $stateParams) {
    $scope.market = booths;
    var currentId = $stateParams.id;

    $scope.addBooth = function() {
      booths.addBooth(
        currentId,
        data = {
        name: $scope.name,
      });
    };
  },
]);
