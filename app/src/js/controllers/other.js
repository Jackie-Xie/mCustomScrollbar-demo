'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:OtherController
 * @description
 * # OtherController
 * Controller of the myappApp
 */
angular.module('myappApp')
  	.controller('OtherController', ['$scope','$timeout','$window','PluginService', function ($scope,$timeout,$window,PluginService) {
	    
	    $scope.init = function () {
	    	$timeout($scope.bindEvent,500);
	    };

	    $scope.bindEvent = function () {
			$.mCustomScrollbar.defaults.scrollButtons.enable=true; //enable scrolling buttons by default
			$.mCustomScrollbar.defaults.axis="yx"; //enable 2 axis scrollbars by default

			// 全屏幕的滚动条
			$('.demo-content').mCustomScrollbar({theme:'3d-thick'});

			$("#content-1,#content-2").mCustomScrollbar({
				theme:"3d-thick",
				scrollInertia:550,
				scrollbarPosition:"inside"
			});

			$("#gridSnap").mCustomScrollbar({
				snapAmount:40,
				scrollButtons:{enable:true},
				keyboard:{scrollAmount:40},
				mouseWheel:{deltaFactor:40},
				scrollInertia:400
			});

			PluginService.formatPlugin();
				
    	};

  	}]);
