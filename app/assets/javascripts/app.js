var farmCart = angular.module('farmCart', ['ui.router', 'templates', 'Devise'])
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
          marketPromise: ['$stateParams', 'markets', function($stateParams, markets) {
            return markets.get($stateParams.id);
          },
          ],
        },
      })
      .state('booths', {
        url: '/booths/{id}',
        templateUrl: 'booths/_booths.html',
        controller: 'boothsShowCtrl',
        resolve: {
          booth: ['$stateParams', 'booths', function($stateParams, booths) {
            return booths.get($stateParams.id);
          },
          ],
        },
      })
      .state('login', {
        url: '/login',
        templateUrl: 'auth/_login.html',
        controller: 'authCtrl',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function() {
            $state.go('home');
          });
        },
        ],
      })
      .state('register', {
        url: '/register',
        templateUrl: 'auth/_register.html',
        controller: 'authCtrl',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function() {
            $state.go('home');
          });
        },
        ],
      });
    $urlRouterProvider.otherwise('home');
  },
]);
