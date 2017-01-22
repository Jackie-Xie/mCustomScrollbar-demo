'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:AboutController
 * @description
 * # AboutController
 * Controller of the myappApp
 */
angular.module('myappApp')
  	.controller('AboutController', ['$scope','$timeout',function ($scope,$timeout) {
  		$scope.init = function () {

  			$timeout($scope.bindEvent,500);
  		};

  		$scope.bindEvent = function () {
  			// 全屏幕的滚动条
			  $('.demo-content').mCustomScrollbar({theme:'3d-thick'});


  		};
		
	}]);
