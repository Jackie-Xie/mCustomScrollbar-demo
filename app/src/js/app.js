'use strict';

/**
 * @ngdoc overview
 * @name myappApp
 * @description
 * # myappApp
 *
 * Main module of the application.
 */
angular
  .module('myappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
    	.when('/', {
			redirectTo: '/property',
		})
		.when('/property', {
			templateUrl: 'views/property.html',
			controller: 'PropController'
		})
		.when('/theme', {
			templateUrl: 'views/theme.html',
			controller: 'ThemeController'
		})
		.when('/function', {
			templateUrl: 'views/function.html',
			controller: 'FuncController'
		})
		.when('/func-ex', {
			templateUrl: 'views/function-ex.html',
			controller: 'FuncExController'
		})
		.when('/combination', {
			templateUrl: 'views/combination.html',
			controller: 'CombController'
		})
		.when('/other', {
			templateUrl: 'views/other.html',
			controller: 'OtherController'
		})
		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'AboutController'
		})
		.when('/404', {
			templateUrl: '404.html',
			controller: ''
		})
		.otherwise({
			redirectTo: '/404',
		});
  });
