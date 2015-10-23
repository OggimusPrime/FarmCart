angular.module('farmCart')
.controller('marketsCtrl', [
  '$scope',
  'markets',
  function($scope, markets) {
    $scope.markets = markets.markets;
  },
]);
