angular.module('farmCart')
.controller('boothsCtrl', [
  '$scope',
  'booths',
  function($scope, booths) {
    $scope.market = booths;
  },
]);
