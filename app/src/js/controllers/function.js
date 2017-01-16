'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:FuncController
 * @description
 * # FuncController
 * Controller of the myappApp
 */
angular.module('myappApp')
  	.controller('FuncController', ['$scope',function ($scope) {
	    // 全屏幕的滚动条
		$('.demo-content').mCustomScrollbar({theme:'3d-thick'});
  	}]);
