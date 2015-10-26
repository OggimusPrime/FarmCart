angular.module('farmCart')
.controller('itemsCtrl', [
  '$scope',
  'booth',
  function($scope, booth) {
    $scope.booth = booth;
  },
]);
