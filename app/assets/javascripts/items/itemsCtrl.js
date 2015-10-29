angular.module('farmCart')
.controller('itemsCtrl', [
  '$scope',
  'items',
  '$stateParams',
  'Upload',
  function($scope, items, $stateParams, Upload) {
    $scope.booth = items;
    var currentId = $stateParams.id;

    // upload later on form submit
    $scope.submit = function() {
      if (form.image.$valid && $scope.image) {
        $scope.addItem($scope.image);
        debugger;
      }
    };

    $scope.addItem = function(image) {
      // if ($scope.name === '') { return; }
      console.log($scope.image);
      debugger;
      items.addItem(
        currentId,
        data = {
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
