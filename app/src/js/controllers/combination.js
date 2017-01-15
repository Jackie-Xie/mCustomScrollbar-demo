'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:CombController
 * @description
 * # CombController
 * Controller of the myappApp
 */
angular.module('myappApp')
  	.controller('CombController', function ($scope) {
	    // 全屏幕的滚动条
		$('.demo-content').mCustomScrollbar({theme:'3d-thick'});
  	});
