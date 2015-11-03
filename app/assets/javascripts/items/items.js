angular.module('farmCart')
.factory('items', [
  '$http',
  '$state',
  '$location',
  function($http, $state, $location) {
    var booth = {
      items: [],
    };

    booth.get = function(id) {
      return $http.get('/booths/' + id + '.json').then(function(res) {
        booth.items.push(res.data);
        return res.data;
      });
    };

    booth.addItem = function(id, item) {
      return $http.post('/booths/' + id + '/items.json', item).success(function() {
        $location.path('/booths/' + id);
      });
    };

    return booth;
  },
]);
