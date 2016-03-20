/**
 * Created by miguelplazas on 19/03/16.
 */
"use strict";

var app = angular.module('veedorApp',
    [
        'ngMaterial',
        'ngMdIcons',
        'ngRoute',
        'ngResource'
    ]);

app.config(function ($routeProvider){
    $routeProvider
        .when('/category', {
            controller: "CategoryCtrl",
            templateUrl: "tpl/categories.html"
        })


});