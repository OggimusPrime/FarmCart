angular.module('farmCart')
.controller('boothsShowCtrl', [
  '$scope',
  'booth',
  'booths',
  function($scope, booth, booths) {
    $scope.booth = booth;
  },
]);
