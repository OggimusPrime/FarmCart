angular.module('farmCart')
.controller('itemsCtrl', [
  '$scope',
  'items',
  '$stateParams',
  'Upload',
  function($scope, items, $stateParams, Upload) {
    $scope.booth = items;
    var currentId = $stateParams.id;

    // $scope.imageFile = {};

    $scope.creativefile = {};

    $scope.upload_file = function() {
      $scope.filename = $scope.creativefile.filename;
      $scope.base64 = $scope.creativefile.base64;
      debugger;
    };

    // upload later on form submit
    // $scope.submit = function() {
    //   if (form.file.$valid && $scope.file) {
    //     $scope.addItem($scope.file);
    //   }
    // };

    // $scope.uploadFile = function() {
    //   console.log($scope.imageFile);
    //   $scope.filesize = $scope.imageFile.name;
    //   debugger;
    //   $scope.addItem($scope.filesize);
    // };

    $scope.addItem = function(file) {
      // if ($scope.name === '') { return; }
      console.log('data:' + $scope.filename + ';base64,' + $scope.base64);
      debugger;
      items.addItem(
        currentId,
        data = {
        name: $scope.name,
        description: $scope.description,
        price: $scope.price,
        image: 'data:' + $scope.filename + ';base64,' + $scope.base64,
      }).success(function() {
        $scope.status = 'Inserted Item!';
        $scope.booth.items.push(item);
      }).error(function(error) {
        $scope.status = 'Unable to create item: ' + error.message;
      });
    };
  },
]);
