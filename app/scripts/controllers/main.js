'use strict';

angular.module('html5app')
  .controller('MainCtrl', function ($scope) {

    $scope.awesomeThings = [
      { name: 'chicken', shopped: false, category: 'meat' },
      { name: 'beer', shopped: false, category: 'drink' },
      { name: 'toast', shopped: false, category: 'bread' }
    ];

    $scope.addTop = function() {
    	$scope.awesomeThings.unshift({});
    }

    $scope.addBottom = function() {
    	$scope.awesomeThings.push({});
    }

    $scope.pretty = function() {
      var temp = $scope.awesomeThings.slice();
      temp.forEach(function(item) {
        delete item.$$hashKey;
      });
      return JSON.stringify(temp, undefined, 2);
    }

  });
