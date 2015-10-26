angular.module('farmCart')
.factory('market', [
  '$http',
  function($http) {
    var o = {
      markets: [],
    };

    o.get = function(id) {
      return $http.get('/markets/' + id + '.json').then(function(res) {
        o.markets.push(res.data);
      });
    };

    return o;
  },
]);
