'use strict';

/**
 * @ngdoc overview
 * @name chrisChinchillaApp
 * @description
 * # chrisChinchillaApp
 *
 * Main module of the application.
 */
angular
  .module('chrisChinchillaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/article/:Nid', {
        templateUrl: 'views/partials/article-detail.html',
        controller: 'ArticleDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
