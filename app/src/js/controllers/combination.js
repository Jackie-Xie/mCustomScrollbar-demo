'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:CombController
 * @description
 * # CombController
 * Controller of the myappApp
 */
angular.module('myappApp')
  	.controller('CombController', ['$scope','$timeout','PluginService',function ($scope,$timeout,PluginService) {
	    $scope.init = function () {
	    	$timeout($scope.bindEvent,500);
	    };


	    $scope.bindEvent = function () {
	   		$.mCustomScrollbar.defaults.scrollButtons.enable = true; 
            $.mCustomScrollbar.defaults.axis = "yx";

            //插件默认初始化
            //PluginService.formatPlugin (); 

	    	// 全屏幕的滚动条
			$('.demo-content').mCustomScrollbar({theme:'3d-thick'});

			// 组合jquery_ui_accordion
	    	$scope.jqueryUiAccordion ();

			// 组合jquery_ui_autocomplete
	    	$scope.autoComplete ();

			// 组合jquery_ui_dialog
	    	$scope.jqueryUiDialog ();
			
			// 组合jquery_ui_resizable
			$scope.resizable ();

			// 组合jquery_ui_sortable
			$scope.jqueryUiSortable ();

			// 组合jquery_ui_tabs
			$scope.jqueryUiTabs ();

			// 组合textarea
	    	$scope.textarea ();

	    	// 组合Bootstrap
	    	$scope.withBootstrap ();
	    };

	    // 组合Bootstrap
	    $scope.withBootstrap = function () {
	    	$(".dropdown-menu-scrollbar").mCustomScrollbar({
				theme:"minimal-dark",
				mouseWheel:{ preventDefault:true }
			});
			
			$(".selectpicker").selectpicker();
			
			$(".dropdown-menu .dropdown-menu").mCustomScrollbar({
				setHeight:240,
				theme:"inset-dark",
				mouseWheel:{ preventDefault:true }
			});
			
			$(".dropdown-menu, html").on("mouseup pointerup",function(e){
				$(".dropdown-menu .mCSB_scrollTools").removeClass("mCSB_scrollTools_onDrag");
			}).on("click",function(e){
				if($(e.target).parents(".mCSB_scrollTools").length || $(".dropdown-menu .mCSB_scrollTools").hasClass("mCSB_scrollTools_onDrag")){ 
					e.stopPropagation(); 
				}
			});
			
			$(".modal-content .modal-body").mCustomScrollbar({
				setHeight:340,
				theme:"minimal-dark"
			});
			
			$("#accordion .panel-body").mCustomScrollbar({
				setHeight:300,
				theme:"dark-3"
			});
			
			$("#myTab .tab-pane").mCustomScrollbar({
				setHeight:280,
				theme:"inset-2"
			});

			PluginService.formatPlugin ();
				
	    };

	    // 组合textarea
	    $scope.textarea = function () {
	    	var textareaLineHeight=parseInt($(".textarea-wrapper textarea").css("line-height"));
				
			$(".textarea-wrapper").mCustomScrollbar({
				scrollInertia:0,
				theme:"dark-3",
				advanced:{autoScrollOnFocus:false},
				keyboard:{enable:false},
				snapAmount:textareaLineHeight
			});
			
			var textarea=$(".textarea-wrapper textarea"),textareaWrapper=$(".textarea-wrapper"),textareaClone=$(".textarea-wrapper .textarea-clone");
			
			textarea.bind("keyup keydown",function(e){
    			var $this=$(this),textareaContent=$this.val(),clength=textareaContent.length,cursorPosition=textarea.getCursorPosition();
				textareaContent="<span>"+textareaContent.substr(0,cursorPosition)+"</span>"+textareaContent.substr(cursorPosition,textareaContent.length);
				textareaContent=textareaContent.replace(/\n/g,"<br />");
    			textareaClone.html(textareaContent+"<br />");
    			$this.css("height",textareaClone.height());
				var textareaCloneSpan=textareaClone.children("span"),textareaCloneSpanOffset=0,
					viewLimitBottom=(parseInt(textareaClone.css("min-height")))-textareaCloneSpanOffset,viewLimitTop=textareaCloneSpanOffset,
					viewRatio=Math.round(textareaCloneSpan.height()+textareaWrapper.find(".mCSB_container").position().top);
				if(viewRatio>viewLimitBottom || viewRatio<viewLimitTop){
					if((textareaCloneSpan.height()-textareaCloneSpanOffset)>0){
						textareaWrapper.mCustomScrollbar("scrollTo",textareaCloneSpan.height()-textareaCloneSpanOffset-textareaLineHeight);
					}else{
						textareaWrapper.mCustomScrollbar("scrollTo","top");
					}
				}
			});
			
	    };

	    $.fn.getCursorPosition=function(){
			var el=$(this).get(0),pos=0;
			if("selectionStart" in el){
    			pos=el.selectionStart;
			}else if("selection" in document){
    			el.focus();
    			var sel=document.selection.createRange(),selLength=document.selection.createRange().text.length;
    			sel.moveStart("character",-el.value.length);
    			pos=sel.text.length-selLength;
			}
			return pos;
		};

	    // 组合jquery_ui_tabs
	    $scope.jqueryUiTabs = function () {
	    	 
			$("#tabs").tabs({
				show:{effect:"fade",duration:300},
				hide:{effect:"fade",duration:300},
				create:function(e,ui){
					/* call mCustomScrollbar function on each tab panel upon tabs creation */
					$(".ui-tabs-panel").mCustomScrollbar({
						setHeight:200,
						theme:"dark-thick"
					});
				}
			});
			
			$("#tabs-2").tabs({
				create:function(e,ui){
					/* wrap panels in a div and call mCustomScrollbar function on it upon tabs creation */
					$("#tabs-2 .ui-tabs-panel").wrapAll("<div class='ui-tabs-panel-wrapper' />");
					$(".ui-tabs-panel-wrapper").mCustomScrollbar({
						setHeight:200,
						setWidth:"100%",
						scrollbarPosition:"outside",
						theme:"light-thick"
					});
				},
				activate:function(e,ui){
					$(".ui-tabs-panel-wrapper").mCustomScrollbar("scrollTo","top",{scrollInertia:0});
				}
			});

			PluginService.formatPlugin ();
	    };

	    // 组合jquery_ui_sortable
	    $scope.jqueryUiSortable = function () {

			/* call mCustomScrollbar function before jquery ui sortable() */
			$("#sortable").mCustomScrollbar({
				scrollbarPosition:"inside",
				scrollInertia:450,
				theme:"light-2"
			});
						
			$("#sortable ul").sortable({
				axis:"y",
				cursor:"move",
				tolerance:"intersect",
				change:function(e,ui){
					var h=ui.helper.outerHeight(true),
						elem=$("#sortable .mCustomScrollBox"),
						elemHeight=elem.height(),
						moveBy=$("#sortable li").outerHeight(true)*3,
						mouseCoordsY=e.pageY-elem.offset().top;
					if(mouseCoordsY<h){
						$("#sortable").mCustomScrollbar("scrollTo","+="+moveBy);
					}else if(mouseCoordsY>elemHeight-h){
						$("#sortable").mCustomScrollbar("scrollTo","-="+moveBy);
					}
				}
			});
	    };

		// 组合jquery_ui_resizable
		$scope.resizable = function () {
			/* call mCustomScrollbar function before jquery ui resizable() */
			
			$("#resizable").mCustomScrollbar({
				scrollbarPosition:"outside",
				setHeight: 200
			});
			
			$("#resizable").resizable();
			PluginService.formatPlugin (); 
		};
	    	
	    // 组合jquery_ui_dialog
	    $scope.jqueryUiDialog = function () {
	    	$("#dialog,#dialog-2").mCustomScrollbar({
					theme:"minimal-dark",
					autoExpandScrollbar:true
				});
							
			$("#dialog").dialog({
				autoOpen:false,
				height:300,
				show:{effect:"fade",duration:800}
			});
			
			$("#dialog-2").dialog({
				autoOpen:false,
				height:300,
				show:{effect:"fade",duration:800},
				open:function(e,ui){
					/* better set a timeout for scrollTo method as sometimes dialog open event acts weird */
					setTimeout(function(){
						$("#dialog-2").mCustomScrollbar("scrollTo","p.full img");
					},60);
				}
			});
			
			$(".dialog a").click(function(e){
				e.preventDefault();
				var $this=$(this),
					rel=$this.attr("rel");
				switch(rel){
					case "open-dialog":
						$("#dialog").dialog("open");
						break;
					case "open-dialog-scroll-to-img":
						$("#dialog-2").dialog("open");
						break;
				}
			});
	    };

	    // 组合jquery_ui_autocomplete
	    $scope.autoComplete = function () {
	    	$("#autocomplete").autocomplete({
				open:function(e,ui){
					/* create the scrollbar each time autocomplete menu opens/updates */
					$(".ui-autocomplete").mCustomScrollbar({
						setHeight:250,
						theme:"light-3",
						autoExpandScrollbar:true
					});
				},
				response:function(e,ui){
					/* destroy the scrollbar after each search completes, before the menu is shown */
					$(".ui-autocomplete").mCustomScrollbar("destroy");
				},
				focus:function(e,ui){
					/* scroll via keyboard */
					if(!ui.item){
						var first=$(".ui-autocomplete li:first");
						first.trigger("mouseenter");
						$(this).val(first.data("uiAutocompleteItem").label);
					}
					var el=$(".ui-state-focus").parent();
					if(!el.is(":mcsInView") && !el.is(":hover")){
						$(".ui-autocomplete").mCustomScrollbar("scrollTo",el,{scrollInertia:0,timeout:0});
					}
				},
				close:function(e,ui){
					/* destroy the scrollbar each time autocomplete menu closes */
					$(".ui-autocomplete").mCustomScrollbar("destroy");
				},
				source:["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"]
			});
	    };

	    // 组合jquery_ui_accordion
	    $scope.jqueryUiAccordion = function () {
	    	$("#content-accordion").accordion({
				create:function(e,ui){
					/* call mCustomScrollbar function on each accordion content upon accordion creation */
					$(".ui-accordion-content").mCustomScrollbar({
						setHeight:150,
						theme:"light-3"
					});
				}
			});
	    };
			

  	}]);
