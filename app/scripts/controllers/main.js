'use strict';

angular.module('html5app')
  
  .controller('MainCtrl', function ($scope, $timeout) {

    var counter = 0;

    $scope.listItems = [
      { name: 'chicken', category: 'meat' },
      { name: 'beer', category: 'drink' },
      { name: 'toast', category: 'bread' }
    ];

    $scope.addTop = function() {
    	$scope.listItems.unshift({ name: 'test' + (++counter), focusMe: true });
    }

    $scope.addMiddle = function(index) {
      $scope.listItems.splice(++index, 0, { name: 'test' + (++counter), focusMe: true });
    }

    $scope.addBottom = function() {
    	$scope.listItems.push({ name: 'test'+ (++counter), focusMe: true });
    }

    $scope.move = function(oldIndex, newIndex) {

      if(newIndex >= 0 && newIndex < $scope.listItems.length) {
        var temp = $scope.listItems[oldIndex];
        $scope.listItems[oldIndex] = $scope.listItems[newIndex];
        $scope.listItems[newIndex] = temp;
      }

    }

    $scope.shop = function(index) {
      if($scope.listItems[index].shopped !== 'shopped') {
        $scope.listItems[index].shopped = 'shopped';
      }
      else {
        delete $scope.listItems[index].shopped; 
      }
    }

    $scope.pretty = function() {
        // var temp = $scope.listItems.slice();
        // temp.forEach(function(item) {
        //   delete item.$$hashKey;
        // });

        return JSON.stringify($scope.listItems, undefined, 2);
    }

    $scope.remove = function(index) {
      $scope.listItems.splice(index, 1);      
    }
  });