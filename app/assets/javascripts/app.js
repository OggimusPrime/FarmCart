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
        controller: 'marketsCtrl',
        resolve: {
          marketsPromise: ['markets', function(markets) {
            return markets.getAll();
          },
          ],
        },
      })
      .state('booths', {
        url: '/markets/{id}',
        templateUrl: 'booths/_booths.html',
        controller: 'boothsCtrl',
        resolve: {
          booths: ['$stateParams', 'booths', function($stateParams, booths) {
            return booths.get($stateParams.id);
          },
          ],
        },
      })
      .state('items', {
        url: '/booths/{id}',
        templateUrl: 'items/_items.html',
        controller: 'itemsCtrl',
        resolve: {
          items: ['$stateParams', 'items', function($stateParams, items) {
            return items.get($stateParams.id);
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
