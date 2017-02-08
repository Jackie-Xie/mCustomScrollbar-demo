'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:FuncExController
 * @description
 * # FuncExController
 * Controller of the myappApp
 */
angular.module('myappApp')
  	.controller('FuncExController', ['$scope','$timeout',function ($scope, $timeout) {
	   	var jsAddEditor = null,jsDisplayEditor = null,jsCallEditor = null;

	    $scope.init = function () {
	    	$scope.isStopOrStart = 'glyphicon glyphicon-pause';
	    	
	    	$scope.jsEditFormat();

	    	$timeout($scope.bindEvent,500);
	    };


	    $scope.bindEvent = function () {
	   		$.mCustomScrollbar.defaults.scrollButtons.enable = true; 
            $.mCustomScrollbar.defaults.axis = "yx"; 

	    	// 全屏幕的滚动条
			$('.demo-content').mCustomScrollbar({theme:'3d-thick'});

			$scope.codeSectionScrollBarFormat();

			// 回调实例
			$scope.watchCallback();
			$scope.clickChange();	
			
			//边拉边加载	
			$scope.infinite();	
				
			$("#hidden-demo").mCustomScrollbar();

			//点击显示隐藏效果	
			$scope.display();
	    };

	    /*
    	 * 代码区域滚动条格式化
	     */
	    $scope.codeSectionScrollBarFormat = function () {
	    	$.mCustomScrollbar.defaults.scrollButtons.enable = true;
            $.mCustomScrollbar.defaults.axis = "yx"; 
            $(".CodeMirror").mCustomScrollbar({    				  
				scrollInertia: 550,
				autoDraggerLength: true,              
				autoHideScrollbar: true,
				theme:'light-3',           
            });
	    };

	    /*
	     * 格式化js代码编辑器
	     */
	    $scope.jsEditFormat = function () {
	          jsAddEditor = CodeMirror.fromTextArea(document.getElementById("addcode"), {
	            lineNumbers: true,
	            styleActiveLine: true,
	            matchBrackets: true,
	            mode: "javascript",
	            theme: "monokai"
	          });

	          jsDisplayEditor = CodeMirror.fromTextArea(document.getElementById("displaycode"), {
	            lineNumbers: true,
	            styleActiveLine: true,
	            matchBrackets: true,
	            mode: "javascript",
	            theme: "monokai"
	          });

	          jsCallEditor = CodeMirror.fromTextArea(document.getElementById("callcode"), {
	            lineNumbers: true,
	            styleActiveLine: true,
	            matchBrackets: true,
	            mode: "javascript",
	            theme: "monokai"
	          });

	    };

	    /*
	     * 点击效果
	     */
	    $scope.display = function () {
	    	$(".show-hide a").click(function(e){
				e.preventDefault();
				var $this=$(this),
					rel=$this.attr("rel"),
					el=$("#hidden-demo"),
					wrapper=$("#init-hidden-demo"),
					dur=700;
				switch(rel){
					case "toggle-display":
						if(!el.is(":visible")){
							el.removeClass("hidden").css("display","block");
						}else{
							el.addClass("hidden").css("display","none");
						}
						break;
					case "toggle-height":
						if(el.is(":visible")){el.toggleClass("zero-height");}
						break;
					case "toggle-width":
						if(el.is(":visible")){el.toggleClass("zero-width");}
						break;
					case "toggle":
						if(!el.is(":animated")){
							wrapper.removeClass("transitions");
							el.toggle(dur,function(){wrapper.addClass("transitions");});
						}
						break;
					case "toggle-fade":
						if(!el.is(":animated")){
							wrapper.removeClass("transitions");
							el.fadeToggle(dur,function(){wrapper.addClass("transitions");});
						}
						break;
					case "toggle-slide":
						if(!el.is(":animated")){
							wrapper.removeClass("transitions");
							el.slideToggle(dur,function(){wrapper.addClass("transitions");});
						}
						break;
				}
			});		
	    };

	    /*
	     * 边拉边加载
	     */
	    $scope.infinite = function () {
	    	$("#infinite-scroll").mCustomScrollbar({
				theme:"light-2",
				scrollButtons:{
					enable:true
				},
				callbacks:{
					onTotalScroll:function(){ _addContent(this) },
					onTotalScrollOffset:100,
					alwaysTriggerOffsets:false
				}
			});
	    };

	    /*
	     * 点击改变状态
	     */
	    $scope.clickChange = function () {
	    	 $(".callbacks a").click(function(e){
				e.preventDefault();
				$(this).parent().toggleClass("off");
				if($(e.target).parent().attr("id")==="alwaysTriggerOffsets"){
					var opts=$("#callbacks-demo").data("mCS").opt;
					if(opts.callbacks.alwaysTriggerOffsets){
						opts.callbacks.alwaysTriggerOffsets=false;
					}else{
						opts.callbacks.alwaysTriggerOffsets=true;
					}
				}
			});
    	};

	   
	    /*
	     * 回调实例
	     */
	    $scope.watchCallback = function () {

	    	$("#callbacks-demo").mCustomScrollbar({
				scrollButtons:{
					enable:true
				},
				callbacks:{
					onScrollStart:function(){ _myCallback(this,"#onScrollStart") },
					onScroll:function(){ _myCallback(this,"#onScroll") },
					onTotalScroll:function(){ _myCallback(this,"#onTotalScroll") },
					onTotalScrollOffset:60,
					onTotalScrollBack:function(){ _myCallback(this,"#onTotalScrollBack") },
					onTotalScrollBackOffset:50,
					whileScrolling:function(){ 
						_myCallback(this,"#whileScrolling"); 
						$("#mcs-top").text(this.mcs.top);
						$("#mcs-dragger-top").text(this.mcs.draggerTop);
						$("#mcs-top-pct").text(this.mcs.topPct+"%");
						$("#mcs-direction").text(this.mcs.direction);
						$("#mcs-total-scroll-offset").text("60");
						$("#mcs-total-scroll-back-offset").text("50");
					},
					alwaysTriggerOffsets:false
				}
			});
	    };

	    var _myCallback = function (el,id) {
			if($(id).css("opacity")<1){return;}
			var span=$(id).find("span");
			clearTimeout(timeout);
			span.addClass("on");
			var timeout=setTimeout(function(){span.removeClass("on")},350);
		},
		_addContent = function (el) {
			var c="<h2>Appended content</h2>";
			for(var i=0; i<3; i++){
				c+="<p>"+el.mcs.content.find("p:eq("+i+")").html()+"</p>";
			}
			c+="<p>End of appended content.</p>";
			el.mcs.content.append(c);
			$(".offset").appendTo(el.mcs.content);
		};

  	}]);
