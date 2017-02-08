'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:ThemeController
 * @description
 * # ThemeController
 * Controller of the myappApp
 */
angular.module('myappApp')
  	.controller('ThemeController', ['$scope','$timeout','ClassService', function ($scope,$timeout,ClassService) {
	    var jsEditor,
	    	codeArr = [
	    	'$("#content-l").mCustomScrollbar();',
	    	'//$("#content-l").mCustomScrollbar({theme:"light"});',
	    	'$("#content-d").mCustomScrollbar({theme:"dark"});',
	    	'$("#content-m").mCustomScrollbar({theme:"minimal"});',
	    	'$("#content-md").mCustomScrollbar({theme:"minimal-dark"});',
	    	'$("#content-l2").mCustomScrollbar({theme:"light-2"});',
	    	'$("#content-d2").mCustomScrollbar({theme:"dark-2"});',
	    	'$("#content-l3").mCustomScrollbar({theme:"light-3"});',
	    	'$("#content-d3").mCustomScrollbar({theme:"dark-3"});',
	    	'$("#content-ltk").mCustomScrollbar({theme:"light-thick"});',
	    	'$("#content-dtk").mCustomScrollbar({theme:"dark-thick"});',
	    	'$("#content-ltn").mCustomScrollbar({theme:"light-thin"});',
	    	'$("#content-dtn").mCustomScrollbar({theme:"dark-thin"});',
	    	'$("#content-i").mCustomScrollbar({theme:"inset"});',
	    	'$("#content-id").mCustomScrollbar({theme:"inset-dark"});',
	    	'$("#content-i2").mCustomScrollbar({theme:"inset-2"});',
	    	'$("#content-i2d").mCustomScrollbar({theme:"inset-2-dark"});',
	    	'$("#content-i3").mCustomScrollbar({theme:"inset-3"});',
	    	'$("#content-i3d").mCustomScrollbar({theme:"inset-3-dark"});',
	    	'$("#content-r").mCustomScrollbar({theme:"rounded"});',
	    	'$("#content-rd").mCustomScrollbar({theme:"rounded-dark"});',
	    	'$("#content-rds").mCustomScrollbar({theme:"rounded-dots"});',
	    	'$("#content-rdsd").mCustomScrollbar({theme:"rounded-dots-dark"});',
	    	'$("#content-3d").mCustomScrollbar({theme:"3d"});',
	    	'$("#content-3dd").mCustomScrollbar({theme:"3d-dark"});',
	    	'$("#content-3dt").mCustomScrollbar({theme:"3d-thick"});',
	    	'$("#content-3dtd").mCustomScrollbar({theme:"3d-thick-dark"});',
	    	'$("#content-fl").mCustomScrollbar({theme:"fluo-light"});',
	    	'$("#content-fld").mCustomScrollbar({theme:"fluo-light-dark"});'
	    ];

	    $scope.init = function () {
	    	$scope.num = 1;
	    	$timeout($scope.bindEvent,500);

	    	$scope.editorFormat();
	    	$scope.generateCode();
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
			// 浅色简约
			$("#content-m").mCustomScrollbar({theme:"minimal"});
			// 深色简约
			$("#content-md").mCustomScrollbar({theme:"minimal-dark"});
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

            $(".CodeMirror").mCustomScrollbar({    				  
				scrollInertia: 550,
				autoDraggerLength: true,              
				autoHideScrollbar: true,
				theme:'light-3',           
            });
    	};

    	$scope.generateCode = function () {
    		//console.log($scope.num);
    		
    		var pageCode = '',
    			start = '(function($){\n\t$(window).on("load",function(){\n\t\t$.mCustomScrollbar.defaults.scrollButtons.enable=true;\n\t\t$.mCustomScrollbar.defaults.axis="yx";\n',
				end = '\n\t});\n})(jQuery);',
				tempStr = '\n/*注意：须在样式文件中加入',
				lightCss = '\n.mCS-fluo-light.mCSB_scrollTools {\n\ttop: 0;\n\tright: 0;\n}\n.mCS-fluo-light.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {\n\twidth: 8px;\n\tbackground-color: #68d4fe;\n\tbox-shadow: 0 0 10px #68d4fe;\n}\n.mCS-fluo-light.mCSB_scrollTools .mCSB_draggerRail {\n\twidth: 4px;\n}*/',
				darkCss = '\n.mCS-fluo-light-dark.mCSB_scrollTools {\n\ttop: 0;\n\tright: 0;\n}\n.mCS-fluo-light-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {\n\twidth: 8px;\n\tbackground-color: #3385ff;\n\tbox-shadow: 0 0 10px #3385ff;\n}\n.mCS-fluo-light-dark.mCSB_scrollTools .mCSB_draggerRail {\n\twidth: 4px;\n\tborder: none;\n\tbackground-color: transparent;\n}*/';

    		switch(parseInt($scope.num)){
    			case 1:
    				pageCode = start + '\t\t' + codeArr[0] + '\n\t\t' + codeArr[1] + end;
    				break;
    			case 2:
    				pageCode = start + '\t\t' + codeArr[2] + end;
    				break;
				case 3:
    				pageCode = start + '\t\t' + codeArr[3] + end;
    				break;
				case 4:
    				pageCode = start + '\t\t' + codeArr[4] + end;
    				break;
				case 5:
    				pageCode = start + '\t\t' + codeArr[5] + end;
    				break;
				case 6:
    				pageCode = start + '\t\t' + codeArr[6] + end;
    				break;
				case 7:
    				pageCode = start + '\t\t' + codeArr[7] + end;
    				break;
    			case 8:
    				pageCode = start + '\t\t' + codeArr[8] + end;
    				break;
    			case 9:
    				pageCode = start + '\t\t' + codeArr[9] + end;
    				break;
    			case 10:
    				pageCode = start + '\t\t' + codeArr[10] + end;
    				break;
    			case 11:
    				pageCode = start + '\t\t' + codeArr[11] + end;
    				break;
    			case 12:
    				pageCode = start + '\t\t' + codeArr[12] + end;
    				break;
				case 13:
    				pageCode = start + '\t\t' + codeArr[13] + end;
    				break;
    			case 14:
    				pageCode = start + '\t\t' + codeArr[14] + end;
    				break;
    			case 15:
    				pageCode = start + '\t\t' + codeArr[15] + end;
    				break;
				case 16:
    				pageCode = start + '\t\t' + codeArr[16] + end;
    				break;
    			case 17:
    				pageCode = start + '\t\t' + codeArr[17] + end;
    				break;
    			case 18:
    				pageCode = start + '\t\t' + codeArr[18] + end;
    				break;
    			case 19:
    				pageCode = start + '\t\t' + codeArr[19] + end;
    				break;
    			case 20:
    				pageCode = start + '\t\t' + codeArr[20] + end;
    				break;
    			case 21:
    				pageCode = start + '\t\t' + codeArr[21] + end;
    				break;
				case 22:
    				pageCode = start + '\t\t' + codeArr[22] + end;
    				break;
				case 23:
    				pageCode = start + '\t\t' + codeArr[23] + end;
    				break;
				case 24:
    				pageCode = start + '\t\t' + codeArr[24] + end;
    				break;
				case 25:
    				pageCode = start + '\t\t' + codeArr[25] + end;
    				break;
				case 26:
    				pageCode = start + '\t\t' + codeArr[26] + end;
    				break;
				case 27:
    				pageCode = start + '\t\t' + codeArr[27] + end + tempStr + lightCss;
    				break;
				case 28:
    				pageCode = start + '\t\t' + codeArr[28] + end + tempStr + darkCss;
    				break;
    		}

    		jsEditor.setValue(pageCode);
    	};

    	$scope.editorFormat = function () {
    		var elements = ClassService.getElementsByClassName("code-copy");

    			jsEditor = CodeMirror.fromTextArea(elements[0], {
		            lineNumbers: false,
		            styleActiveLine: true,
		            matchBrackets: true,
		            mode: "javascript",
		            theme: "monokai"
		        });
          	
	    };
  	}]);
