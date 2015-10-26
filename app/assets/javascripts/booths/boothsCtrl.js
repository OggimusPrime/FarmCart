angular.module('farmCart')
.controller('boothsCtrl', [
  '$scope',
  'markets',
  function($scope, markets) {
    $scope.market = markets.markets[0];
  },
]);
