angular.module('farmCart')
.controller('itemsCtrl', [
  '$scope',
  'items',
  function($scope, items) {
    $scope.booth = items;
  },
]);
