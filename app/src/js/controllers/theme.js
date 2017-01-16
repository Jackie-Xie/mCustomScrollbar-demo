'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:ThemeController
 * @description
 * # ThemeController
 * Controller of the myappApp
 */
angular.module('myappApp')
  	.controller('ThemeController', ['$scope', function ($scope) {
	    
	    $scope.init = function () {
	    	$scope.bindEvent();
	    };

	    $scope.bindEvent = function () {
			$.mCustomScrollbar.defaults.scrollButtons.enable=true; //enable scrolling buttons by default
			$.mCustomScrollbar.defaults.axis="yx"; //enable 2 axis scrollbars by default

			// 全屏幕的滚动条
			$('.demo-content').mCustomScrollbar({theme:'3d-thick'});
			// 浅色主题（默认）
			$("#content-l").mCustomScrollbar();
			// 深色主题
			$("#content-d").mCustomScrollbar({theme:"dark"});
			// 浅色主题2
			$("#content-l2").mCustomScrollbar({theme:"light-2"});
			// 深色主题2
			$("#content-d2").mCustomScrollbar({theme:"dark-2"});
			// 浅色主题3
			$("#content-l3").mCustomScrollbar({theme:"light-3"});
			// 深色主题3
			$("#content-d3").mCustomScrollbar({theme:"dark-3"});
			// 浅色浑厚
			$("#content-ltk").mCustomScrollbar({theme:"light-thick"});
			// 深色浑厚
			$("#content-dtk").mCustomScrollbar({theme:"dark-thick"});
			// 浅色纤细
			$("#content-ltn").mCustomScrollbar({theme:"light-thin"});
			// 深色纤细
			$("#content-dtn").mCustomScrollbar({theme:"dark-thin"});
			// 浅色简约
			$("#content-m").mCustomScrollbar({theme:"minimal"});
			// 深色简约
			$("#content-md").mCustomScrollbar({theme:"minimal-dark"});
			// 浅色内嵌
			$("#content-i").mCustomScrollbar({theme:"inset"});
			// 深色内嵌
			$("#content-id").mCustomScrollbar({theme:"inset-dark"});
			// 浅色内嵌2
			$("#content-i2").mCustomScrollbar({theme:"inset-2"});
			// 深色内嵌2
			$("#content-i2d").mCustomScrollbar({theme:"inset-2-dark"});
			// 浅色内嵌3
			$("#content-i3").mCustomScrollbar({theme:"inset-3"});
			// 深色内嵌3
			$("#content-i3d").mCustomScrollbar({theme:"inset-3-dark"});
			// 浅色纽扣
			$("#content-r").mCustomScrollbar({theme:"rounded"});
			// 深色纽扣
			$("#content-rd").mCustomScrollbar({theme:"rounded-dark"});
			// 浅色虚线纽扣
			$("#content-rds").mCustomScrollbar({theme:"rounded-dots"});
			// 深色虚线纽扣
			$("#content-rdsd").mCustomScrollbar({theme:"rounded-dots-dark"});
			// 浅色3d主题
			$("#content-3d").mCustomScrollbar({theme:"3d"});
			// 深色3d主题
			$("#content-3dd").mCustomScrollbar({theme:"3d-dark"});
			// 浅色3d浑厚
			$("#content-3dt").mCustomScrollbar({theme:"3d-thick"});
			// 深色3d浑厚
			$("#content-3dtd").mCustomScrollbar({theme:"3d-thick-dark"});
			// 浅色荧光
			$("#content-fl").mCustomScrollbar({theme:"fluo-light"});
			// 深色荧光
			$("#content-fld").mCustomScrollbar({theme:"fluo-light-dark"});
				
    	};
  	}]);
