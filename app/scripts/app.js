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
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
      })
      .when('/work', {
        templateUrl: 'views/work.html',
        controller: 'WorkCtrl'
      })
      .when('/article/:Nid', {
        templateUrl: 'views/partials/article-detail.html',
        controller: 'BlogDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
