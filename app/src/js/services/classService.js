'use strict';

angular.module('myappApp')
  .service('ClassService',function (){

	this.getElementsByClassName = function (clss) {
		if(document.getElementsByClassName){
			return document.getElementsByClassName(clss);	
		}else{
			var tags = document.getElementsByTagName("*");
			var tagsArr = [];
			for(var i=0; i<tags.length; i++){
				if(tags[i].className == clss){
					tagsArr.push(tagsArr[i]);		
				}	
			}	
			return tagsArr;
		}
	};
});