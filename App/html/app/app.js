'use strict';

/**
 * @ngdoc overview
 * @name olimpoWebApp
 * @description
 * # olimpoWebApp
 *
 * Main module of the application.
 */
angular
  .module('olimpoWebApp', [
    'olimpoWebApp.main',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/main'
      });
  }]);


