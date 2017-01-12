'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:ThemeController
 * @description
 * # ThemeController
 * Controller of the myappApp
 */
angular.module('myappApp')
  	.controller('ThemeController', function ($scope) {
	    
	    $scope.init = function () {
	    	$scope.bindEvent();
	    };

	    $scope.bindEvent = function () {
			$.mCustomScrollbar.defaults.scrollButtons.enable=true; //enable scrolling buttons by default
			$.mCustomScrollbar.defaults.axis="yx"; //enable 2 axis scrollbars by default
			
			$("#content-l").mCustomScrollbar();
			
			$("#content-d").mCustomScrollbar({theme:"dark"});
			
			$("#content-l2").mCustomScrollbar({theme:"light-2"});
			
			$("#content-d2").mCustomScrollbar({theme:"dark-2"});
			
			$("#content-l3").mCustomScrollbar({theme:"light-3"});
			
			$("#content-d3").mCustomScrollbar({theme:"dark-3"});
			
			$("#content-ltk").mCustomScrollbar({theme:"light-thick"});
			
			$("#content-dtk").mCustomScrollbar({theme:"dark-thick"});
			
			$("#content-ltn").mCustomScrollbar({theme:"light-thin"});
			
			$("#content-dtn").mCustomScrollbar({theme:"dark-thin"});
			
			$("#content-m").mCustomScrollbar({theme:"minimal"});
			
			$("#content-md").mCustomScrollbar({theme:"minimal-dark"});
			
			$("#content-i").mCustomScrollbar({theme:"inset"});
			
			$("#content-id").mCustomScrollbar({theme:"inset-dark"});
			
			$("#content-i2").mCustomScrollbar({theme:"inset-2"});
			
			$("#content-i2d").mCustomScrollbar({theme:"inset-2-dark"});
			
			$("#content-i3").mCustomScrollbar({theme:"inset-3"});
			
			$("#content-i3d").mCustomScrollbar({theme:"inset-3-dark"});
			
			$("#content-r").mCustomScrollbar({theme:"rounded"});
			
			$("#content-rd").mCustomScrollbar({theme:"rounded-dark"});
			
			$("#content-rds").mCustomScrollbar({theme:"rounded-dots"});
			
			$("#content-rdsd").mCustomScrollbar({theme:"rounded-dots-dark"});
			
			$("#content-3d").mCustomScrollbar({theme:"3d"});
			
			$("#content-3dd").mCustomScrollbar({theme:"3d-dark"});
			
			$("#content-3dt").mCustomScrollbar({theme:"3d-thick"});
			
			$("#content-3dtd").mCustomScrollbar({theme:"3d-thick-dark"});

			$("#content-fl").mCustomScrollbar({theme:"fluo-light"});
			
			$("#content-fld").mCustomScrollbar({theme:"fluo-light-dark"});
				
    	};
  	});
