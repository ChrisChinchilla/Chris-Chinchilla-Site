'use strict';

/**
 * @ngdoc function
 * @name chrisChinchillaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chrisChinchillaApp
 */
 angular.module('chrisChinchillaApp')
 .controller('MainCtrl', ['$scope',
 function ($scope) {
   $scope.awesomeThings = [
   'HTML5 Boilerplate',
   'AngularJS',
   'Karma'
   ];
 }]);
