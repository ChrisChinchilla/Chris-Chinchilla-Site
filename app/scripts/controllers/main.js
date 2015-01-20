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
    function getRandomImage() {

      var imageCount = $scope.images.length;

      var index = Math.floor(
        ( Math.random() * imageCount * 2 ) % imageCount
        );

      return( $scope.images[ index ] );

    }
    $scope.images = [
    {
      source: '../../images/semi_fr_prof_sn_rs.jpg',
      title: 'Me looking disapproving'
    },
    {
      source: '../../images/semi_fr_nonprof_sn_rs.jpg',
      title: 'Me with a Coffee'
    }
    ];
    $scope.image = getRandomImage();

    $scope.showImage = function( index ) {
      $scope.image = $scope.images[ index - 1 ];
    };
  }]);