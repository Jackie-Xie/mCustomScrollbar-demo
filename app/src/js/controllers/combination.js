'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:CombController
 * @description
 * # CombController
 * Controller of the myappApp
 */
angular.module('myappApp')
  	.controller('CombController', ['$scope','$timeout',function ($scope,$timeout) {
	    $scope.init = function () {
	    	$timeout($scope.bindEvent,500);
	    };


	    $scope.bindEvent = function () {
	   		$.mCustomScrollbar.defaults.scrollButtons.enable = true; 
            $.mCustomScrollbar.defaults.axis = "yx"; 

	    	// 全屏幕的滚动条
			$('.demo-content').mCustomScrollbar({theme:'3d-thick'});

			$("#content-myself").accordion({
				create:function(e,ui){
					/* call mCustomScrollbar function on each accordion content upon accordion creation */
					$(".ui-accordion-content").mCustomScrollbar({
						setHeight:300,
						theme:"dark-thick"
					});
				}
			});
	    };
  	}]);
