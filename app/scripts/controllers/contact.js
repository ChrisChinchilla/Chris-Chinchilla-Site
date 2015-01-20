'use strict';

/**
* @ngdoc function
* @name chrisChinchillaApp.controller:ContactCtrl
* @description
* # ContactCtrl
* Controller of the chrisChinchillaApp
*/
angular.module('chrisChinchillaApp')
.controller('ContactCtrl', ['$scope',
	function ($scope) {
		$scope.username = 'chriswhward';
		$scope.domainname = 'gmail.com';
	}]);