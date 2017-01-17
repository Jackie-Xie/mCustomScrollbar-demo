'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:FuncController
 * @description
 * # FuncController
 * Controller of the myappApp
 */
angular.module('myappApp')
  	.controller('FuncController', ['$scope','$timeout',function ($scope, $timeout) {
	    var content=$("#content-scroll"),autoScrollTimerAdjust,autoScroll,
	    	autoScrollParameter = {
	    		autoScrollTimer:8000 ,
	    		isNeedBtn: true
	    	};

	    $scope.init = function () {
	    	$scope.isStopOrStart = 'glyphicon glyphicon-pause';
	    	
	    	$timeout($scope.bindEvent,500);
	    };


	    $scope.bindEvent = function () {
	   		$.mCustomScrollbar.defaults.scrollButtons.enable = true; 
            $.mCustomScrollbar.defaults.axis = "yx"; 

	    	// 全屏幕的滚动条
			$('.demo-content').mCustomScrollbar({theme:'3d-thick'});

			//自动滚动的滚动条
			content.mCustomScrollbar({theme:'light-3'});
			$scope.autoScroll();

			/* 
			 * get snap amount programmatically or just set it directly (e.g. "273") 
			 * in this example, the snap amount is list item's (li) outer-width (width+margins)
			 */
			var amount=Math.max.apply(Math,$("#content-snap li").map(function(){return $(this).outerWidth(true);}).get());
			
			$("#content-snap").mCustomScrollbar({
				axis:"x",
				theme:"inset",
				advanced:{
					autoExpandHorizontalScroll:true
				},
				scrollButtons:{
					enable:true,
					scrollType:"stepped"
				},
				keyboard:{scrollType:"stepped"},
				snapAmount:amount,
				mouseWheel:{scrollAmount:amount}
			});

			$.mCustomScrollbar.defaults.theme="light-2"; //set "light-2" as the default theme
				
			$(".demo-y").mCustomScrollbar();
			
			$(".demo-x").mCustomScrollbar({
				axis:"x",
				advanced:{autoExpandHorizontalScroll:true}
			});
			
			$(".demo-yx").mCustomScrollbar({
				axis:"yx"
			});
			
			$(".scrollTo a").click(function(e){
				e.preventDefault();
				var $this=$(this),
					rel=$this.attr("rel"),
					el=rel==="content-y" ? ".demo-y" : rel==="content-x" ? ".demo-x" : ".demo-yx",
					data=$this.data("scroll-to"),
					href=$this.attr("href").split(/#(.+)/)[1],
					to=data ? $(el).find(".mCSB_container").find(data) : el===".demo-yx" ? eval("("+href+")") : href,
					output=$("#info > p code"),
					outputTXTdata=el===".demo-yx" ? data : "'"+data+"'",
					outputTXThref=el===".demo-yx" ? href : "'"+href+"'",
					outputTXT=data ? "$('"+el+"').find('.mCSB_container').find("+outputTXTdata+")" : outputTXThref;
				$(el).mCustomScrollbar("scrollTo",to);
				output.text("$('"+el+"').mCustomScrollbar('scrollTo',"+outputTXT+");");
			});
				
	    };

	    /*
	     * 自动滚动
	     */
	    $scope.autoScroll = function () {
	    	var isNeedBtn = autoScrollParameter.isNeedBtn,
	    		autoScrollTimer = autoScrollParameter.autoScrollTimer;

	    	console.log(isNeedBtn + ',' + autoScrollTimer);

			content.mCustomScrollbar({
				scrollButtons:{enable: isNeedBtn },
				callbacks:{
					whileScrolling:function(){
						autoScrollTimerAdjust=autoScrollTimer*this.mcs.topPct/100;
					},
					onScroll:function(){
						if($(this).data("mCS").trigger==="internal"){_AutoScrollOff();}
					}
				}
			});

			content.addClass("auto-scrolling-on auto-scrolling-to-bottom");
			_AutoScrollOn("bottom");

	    };

	    /*
	     * 点击停止自动滚动
	     */
	    $scope.clickStop = function (e) {
	    	var autoScrollTimer = autoScrollParameter.autoScrollTimer;
			e.preventDefault();

			if(content.hasClass("auto-scrolling-on")){
				$scope.isStopOrStart = 'glyphicon glyphicon-play';

				_AutoScrollOff();
			}else{
				$scope.isStopOrStart = 'glyphicon glyphicon-pause';

				if(content.hasClass("auto-scrolling-to-top")){
					_AutoScrollOn("top",autoScrollTimerAdjust);
				}else{
					_AutoScrollOn("bottom",autoScrollTimer-autoScrollTimerAdjust);
				}
			}
		};

	    var _AutoScrollOn = function  (to,timer) {
	    	var autoScrollTimer = autoScrollParameter.autoScrollTimer;

			if(!timer){timer=autoScrollTimer;}
			content.addClass("auto-scrolling-on").mCustomScrollbar("scrollTo",to,{scrollInertia:timer,scrollEasing:"easeInOutSmooth"});
			autoScroll=setTimeout(function(){
				if(content.hasClass("auto-scrolling-to-top")){
					_AutoScrollOn("bottom",autoScrollTimer-autoScrollTimerAdjust);
					content.removeClass("auto-scrolling-to-top").addClass("auto-scrolling-to-bottom");
				}else{
					_AutoScrollOn("top",autoScrollTimerAdjust);
					content.removeClass("auto-scrolling-to-bottom").addClass("auto-scrolling-to-top");
				}
			},timer);
		},
		_AutoScrollOff = function () {
			clearTimeout(autoScroll);
			content.removeClass("auto-scrolling-on").mCustomScrollbar("stop");
		};

  	}]);
