angular.module('farmCart')
.factory('markets', [
  '$http',
  function($http) {
    var o = {
      markets: [],
    };

    o.getAll = function() {
      return $http.get('/markets.json').success(function(data) {
        angular.copy(data, o.markets);
      });
    };

    o.get = function(id) {
      return $http.get('/markets/' + id + '.json').then(function(res) {
        o.markets.push(res.data);
      });
    };

    return o;
  },
]);
