angular.module('farmCart')
.factory('booths', [
  '$http',
  function($http) {
    var b = {
      booths: [],
    };

    b.get = function(id) {
      return $http.get('/booths/' + id + '.json').then(function(res) {
        return res.data;
      });
    };

    return b;
  },
]);
