angular.module('farmCart')
.factory('booths', [
  '$http',
  function($http) {
    var market = {
      booths: [],
    };

    market.get = function(id) {
      return $http.get('/markets/' + id + '.json').then(function(res) {
        market.booths.push(res.data);
        return res.data;
      });
    };

    return market;
  },
]);
