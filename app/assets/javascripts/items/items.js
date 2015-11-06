angular.module('farmCart')
.factory('items', [
  '$http',
  '$location',
  function($http, $location) {
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

    booth.showItem = function() {
      debugger;
      return $http.get('/booths/' + id + '/items/' + item.id + '.json').then(function(res) {
        return res.data;
      });
    };

    return booth;
  },
]);
