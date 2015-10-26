angular.module('farmCart')
.controller('boothCtrl', [
  '$scope',
  'booth',
  function($scope, booth) {
    $scope.booth = booth;
  },
]);
