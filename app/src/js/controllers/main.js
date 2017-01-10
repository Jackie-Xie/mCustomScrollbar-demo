'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myappApp
 */
angular.module('myappApp')
  	.controller('MainCtrl', function ($scope) {
	    $scope.todos = ['吃饭', '睡觉', '打豆豆'];
	    $scope.todo = '';
	    
	    $scope.addTodo = function () {
	    	if( '' == $scope.todo || $scope.todos.indexOf($scope.todo)>-1){
	    		console.log('error input');
	    		return false;
	    	}
		    $scope.todos.push($scope.todo);
		    $scope.todo = '';
	    };

	    $scope.removeTodo = function (index) {
		  	$scope.todos.splice(index, 1);
		};
  	});
