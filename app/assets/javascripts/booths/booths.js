angular.module('farmCart')
.factory('booths', [
  '$http',
  '$location',
  function($http, $location) {
    var market = {
      booths: [],
    };

    market.get = function(id) {
      return $http.get('/markets/' + id + '.json').then(function(res) {
        market.booths.push(res.data);
        return res.data;
      });
    };

    market.addBooth = function(id, booth) {
      return $http.post('/markets/' + id + '/booths.json', booth).success(function() {
        $location.path('/markets/' + id);
      });
    };

    return market;
  },
]);
