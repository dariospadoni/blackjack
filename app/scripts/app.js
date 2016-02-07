'use strict';

/**
 * @ngdoc overview
 * @name blackjackApp
 * @description
 * # blackjackApp
 *
 * Main module of the application.
 */
angular
  .module('blackjackApp', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/board.html',
        controller: 'BoardCtrl',
        controllerAs: 'board'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
