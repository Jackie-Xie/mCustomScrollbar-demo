'use strict';

angular.module('myappApp')
  .service('PluginService',function (){
	// 默认插件初始化
	this.formatPlugin = function () {
		/* all available option parameters with their default values */
		
		$('.content').mCustomScrollbar({
			setWidth:false,
			setHeight:false,
			setTop:0,
			setLeft:0,
			axis:"y",
			scrollbarPosition:"inside",
			scrollInertia:950,
			autoDraggerLength:true,
			autoHideScrollbar:false,
			autoExpandScrollbar:false,
			alwaysShowScrollbar:0,
			snapAmount:null,
			snapOffset:0,
			mouseWheel:{
				enable:true,
				scrollAmount:"auto",
				axis:"y",
				preventDefault:false,
				deltaFactor:"auto",
				normalizeDelta:false,
				invert:false,
				disableOver:["select","option","keygen","datalist","textarea"]
			},
			scrollButtons:{
				enable:false,
				scrollType:"stepless",
				scrollAmount:"auto"
			},
			keyboard:{
				enable:true,
				scrollType:"stepless",
				scrollAmount:"auto"
			},
			contentTouchScroll:25,
			advanced:{
				autoExpandHorizontalScroll:false,
				autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
				updateOnContentResize:true,
				updateOnImageLoad:true,
				updateOnSelectorChange:false,
				releaseDraggableSelectors:false
			},
			theme:"light",
			callbacks:{
				onInit:false,
				onScrollStart:false,
				onScroll:false,
				onTotalScroll:false,
				onTotalScrollBack:false,
				whileScrolling:false,
				onTotalScrollOffset:0,
				onTotalScrollBackOffset:0,
				alwaysTriggerOffsets:true,
				onOverflowY:false,
				onOverflowX:false,
				onOverflowYNone:false,
				onOverflowXNone:false
			},
			live:false,
			liveSelector:null
		});
	};
});