angular.module('farmCart')
.controller('marketsShowCtrl', [
  '$scope',
  'markets',
  'market',
  function($scope, markets, market) {
    $scope.market = market;
  },
]);
