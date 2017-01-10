angular.module('myappApp')
  	.controller('NavCtrl', function ($scope, $location) {
  		$scope.pathStr = '';
	   	$scope.init = function () {
	    	$scope.pathStr = $location.path();
	    };
  	});