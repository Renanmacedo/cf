angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  .state('menuTabs.carteira', {
    url: '/carteira',
    views: {
      'tab1': {
        templateUrl: 'templates/carteira.html',
        controller: 'carteiraCtrl'
      }
    }
  })

  .state('menuTabs.consumo', {
    url: '/consumo',
    views: {
      'tab2': {
        templateUrl: 'templates/consumo.html',
        controller: 'consumoCtrl'
      }
    }
  })
  .state('menuTabs', {
    url: '/menutabs',
    templateUrl: 'templates/menuTabs.html',
    abstract:true
  })
  .state('menuTabs.perfil', {
    url: '/perfil',
    views: {
      'tab3': {
        templateUrl: 'templates/perfil.html',
        controller: 'perfilCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/menutabs/carteira')
});