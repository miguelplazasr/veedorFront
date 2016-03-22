/**
 * Created by miguelplazas on 19/03/16.
 */
"use strict";

var app = angular.module('veedorApp',
    [
        'ngMaterial',
        'ngMdIcons',
        'ngRoute',
        'ngResource',
    ]);

/* Routes Configuration */
app.config(function ($routeProvider){
    $routeProvider
		.when('/', {
			controller: "MainCtrl"
		})
        .when('/category', {
            controller: "CategoryCtrl",
            templateUrl: "tpl/categories.html"
        })
		.when('/category/new', {
			controller: "CategoryCtrl",
			templateUrl: "tpl/categories_new.html"
		})
        .otherwise({
            redirectTo: '/'
        });
});

/* Theming Configuration */
app.config(function($mdThemingProvider){
	$mdThemingProvider.theme('default')
	.primaryPalette('pink')
	.accentPalette('orange')
})