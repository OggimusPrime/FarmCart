angular.module('farmCart')
.controller('marketsShowCtrl', [
  '$scope',
  'markets',
  function($scope, markets) {
    $scope.market = markets.markets[0];
  },
]);
