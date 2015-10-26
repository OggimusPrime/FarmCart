angular.module('farmCart')
.factory('markets', [
  '$http',
  function($http) {
    var marketsAll = {
      markets: [],
    };

    marketsAll.getAll = function() {
      return $http.get('/markets.json').success(function(data) {
        angular.copy(data, marketsAll.markets);
      });
    };

    return marketsAll;
  },
]);
