angular.module('farmCart')
.controller('authCtrl', [
  '$scope',
  '$state',
  'Auth',
  function($scope, $state, Auth, $http) {
    $scope.login = function() {
      Auth.login($scope.user).then(function() {
        $state.go('home');
      });
    };

    $scope.register = function() {
      Auth.register($scope.user).then(function() {
        $state.go('home');
      });
    };

    $scope.$on('devise:unauthorized', function(event, xhr, deferred) {
      // Disable interceptor on _this_ login request,
      // so that it too isn't caught by the interceptor
      // on a failed login.
      var config = {
        interceptAuth: false,
      };

      // Ask user for login credentials
      Auth.login(credentials, config).then(function() {
        // Successfully logged in.
        // Redo the original request.
        return $http(xhr.config);
      }).then(function(response) {
        // Successfully recovered from unauthorized error.
        // Resolve the original request's promise.
        deferred.resolve(response);
      }, function(error) {
        // There was an error logging in.
        // Reject the original request's promise.
        deferred.reject(error);
      });
    });
  },
]);
