'use strict';

/**
* @ngdoc function
* @name chrisChinchillaApp.controller:BlogCtrl
* @description
* # BlogCtrl
* Controller of the chrisChinchillaApp
*/

angular.module('chrisChinchillaApp')
.controller('BlogCtrl', ['$scope', '$http',
function ($scope, $http) {
  $http.get('http://gregariousmammal.dev/chrischinchilla/json').success(function(data) {
    // console.log(data.nodes);
    $scope.articles = data.nodes;
  });

  $scope.orderProp = 'age';
}]);


angular.module('chrisChinchillaApp')
.controller('BlogDetailCtrl', ['$scope', '$sce', '$routeParams', '$http',
function($scope, $sce, $routeParams, $http) {
  $http.get('http://gregariousmammal.dev/chrischinchilla/json').success(function(data){
    angular.forEach(data.nodes, function(item) {
      if (item.node.Nid === $routeParams.Nid) {
        // console.log(item.node);
        $scope.article = item.node;

        $scope.deliberatelyTrustDangerousSnippet = function(html) {
          return $sce.trustAsHtml(html);
        };
      }
    });
  });
}]);
