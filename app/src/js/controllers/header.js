'use strict';
/**
 * @ngdoc function
 * @name myappApp.controller:NavController
 * @description
 * # NavController
 * Controller of the myappApp
 */
angular.module('myappApp')
  	.controller('NavController', function ($scope, $location) {
  		$scope.pathStr = '';
	   	$scope.init = function () {
	    	$scope.pathStr = $location.path();
	    };
  	});