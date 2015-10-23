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
        controller: 'marketsCtrl',
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
        controller: 'marketsCtrl',
        resolve: {
          market: ['$stateParams', 'markets', function($stateParams, markets) {
            return markets.get($stateParams.id);
          },
          ],
        },
      });
    $urlRouterProvider.otherwise('home');
  },
]);
