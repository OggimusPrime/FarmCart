angular.module('farmCart', ['ui.router', 'templates'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/_home.html',
        controller: 'mainCtrl',
      })
      .state('markets', {
        url: '/markets',
        templateUrl: 'markets/_markets.html',
        controller: 'marketsIndexCtrl',
        resolve: {
          marketsPromise: ['markets', function(markets) {
            return markets.getAll();
          },
          ],
        },
      })
      .state('market', {
        url: '/markets/{id}',
        templateUrl: 'markets/_market.html',
        controller: 'marketsShowCtrl',
        resolve: {
          market: ['$stateParams', 'markets', function($stateParams, markets) {
            return markets.get($stateParams.id);
          },
          ],
        },
      });

      // .state('market.booths', {
      //   url: '/markets/{id}/booths',
      //   templateUrl: 'booths/_booths.html',
      //   controller: 'boothsIndexCtrl',
      //   resolve: {
      //     boothsPromise: ['booths', function(booths) {
      //       return booths.getBooths(id);
      //     },
      //     ],
      //   },
      // });
    $urlRouterProvider.otherwise('home');
  },
]);
