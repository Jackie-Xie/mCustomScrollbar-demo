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
  		$scope.init = function () {
  			$scope.bindEvent();
  		};

  		$scope.bindEvent = function () {
        $.mCustomScrollbar.defaults.scrollButtons.enable = true; 
        $.mCustomScrollbar.defaults.axis = "yx";

  			// 全屏幕的滚动条
			  $('.demo-content').mCustomScrollbar({theme:'3d-thick'});

        $('.code-sec').mCustomScrollbar({
          theme:'light'

        });

  		};
		
	}]);
