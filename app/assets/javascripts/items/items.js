angular.module('farmCart')
.factory('items', [
  '$http',
  '$state',
  function($http, $state) {
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
      console.log('/booths/' + id + '/items.json', item);
      return $http.post('/booths/' + id + '/items.json', item).then(function() {
        $state.go('/booths/' + id);
      });
    };

    return booth;
  },
]);
