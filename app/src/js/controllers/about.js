'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:AboutController
 * @description
 * # AboutController
 * Controller of the myappApp
 */
angular.module('myappApp')
  	.controller('AboutController', ['$scope',function ($scope) {
  		// 全屏幕的滚动条
		$('.demo-content').mCustomScrollbar({theme:'3d-thick'});
	}]);
