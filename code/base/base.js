/* eslint no-constant-condition: 0 */

(function () {

  'use strict';

  var module = angular.module('app', [
    'ngMaterial',
    'ui.router'
  ]);

  module.config(function ($urlRouterProvider, $stateProvider) {
    // var rev = '<rev-hash>' !== '<rev\-hash>' ? '.<rev-hash>' : '';
    $urlRouterProvider.otherwise('/main');
    $stateProvider

    .state('main', {
        url: '/main',
        templateUrl: 'apps/main.html',
        controller: 'MainCtrl',
        resolve: {
          $data: ['$http', '$stateParams', function ($http, $stateParams) {
            return $http.get('apps/locale/en-gb.json');
          }]
      }
    })

    .state('products', {
        url: '/products',
        templateUrl: 'apps/products.html',
        controller: 'ProductCtrl',
        resolve: {
          $data: ['$http', '$stateParams', function ($http, $stateParams) {
            return $http.get('/apps/locale/en-gb.json');
          }]
        }
    })

    .state('services', {
        url: '/services',
        templateUrl: 'apps/services.html',
        controller: 'ServiceCtrl',
        resolve: {
        $data: ['$http', '$stateParams', function ($http, $stateParams) {
          return $http.get('/apps/locale/en-gb.json');
        }]
      }
    })

    .state('app', {
      url: '/app',
      templateUrl: 'apps/app.html',
      controller: 'AppCtrl',
      resolve: {
        $data: ['$http', '$stateParams', function ($http, $stateParams) {
          return $http.get('/apps/locale/en-gb.json');
        }]
      }
    });

  });

  module.directive('navBar', function() {
    return {
      restrict: 'E',
      replace: true,
      controller: function($scope) {
        $scope.menu = {
          main: 'home',
          products: 'products',
          services: 'services',
          app: 'app'
        };
      },
      template: '<nav><ul><li><a ng-repeat="(key, val) in menu" ui-sref="{{key}}">{{val}}</a></li></ul></nav>'
    }
  });

}) ();
