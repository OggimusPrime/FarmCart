angular.module('farmCart')
.controller('marketsIndexCtrl', [
  '$scope',
  'markets',
  function($scope, markets) {
    $scope.markets = markets.markets;
  },
]);
