'use strict';
/**
 * @ngdoc function
 * @name myappApp.controller:NavController
 * @description
 * # NavController
 * Controller of the myappApp
 */
angular.module('myappApp')
  	.controller('NavController', ['$scope','$location',function ($scope, $location) {
  		var viewWidth = $(window).width(),
  			viewHeight = $(window).height();
  		$scope.pathStr = '';
	   	$scope.init = function () {
	    	$scope.pathStr = $location.path();

	    	$scope.resetRender();
	    	$('window').on('resize',function () {
	    		$scope.resetRender();
	    	});
	    };

	    $scope.resetRender = function () {
	    	$('.demo-content').css('height',viewHeight - 135);
	    };
  	}]);