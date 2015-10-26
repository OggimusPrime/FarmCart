angular.module('farmCart')
.factory('items', [
  '$http',
  function($http) {
    var booth = {
      items: [],
    };

    booth.get = function(id) {
      return $http.get('/booths/' + id + '.json').then(function(res) {
        return res.data;
      });
    };

    return booth;
  },
]);
