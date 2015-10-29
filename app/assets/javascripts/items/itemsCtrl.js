angular.module('farmCart')
.controller('itemsCtrl', [
  '$scope',
  'items',
  '$stateParams',
  function($scope, items, $stateParams) {
    $scope.booth = items;
    var currentId = $stateParams.id;

    $scope.addItem = function() {
      // if ($scope.name === '') { return; }
      console.log($scope.image);
      items.addItem(
        currentId,
        item = {
        name: $scope.name,
        description: $scope.description,
        price: $scope.price,
        image: $scope.image,
      }).success(function() {
        $scope.status = 'Inserted Item!';
        $scope.booth.items.push(item);
      }).error(function(error) {
        $scope.status = 'Unable to create item: ' + error.message;
      });
    };
  },
]);
