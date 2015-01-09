'use strict';

/**
 * @ngdoc function
 * @name chrisChinchillaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chrisChinchillaApp
 */
angular.module('chrisChinchillaApp')
  .controller('MainCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('http://gregariousmammal.dev/chrischinchilla/json').success(function(data) {
      console.log(data.nodes);
      $scope.articles = data.nodes;
    });

    $scope.orderProp = 'age';
  }]);
