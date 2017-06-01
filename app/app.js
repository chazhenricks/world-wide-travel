"use strict";


var app = angular.module("World-Travel", ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when("/city", {
        templateUrl: "partials/books.html",
        controller: "CityCtrl"
    })
    .when("/country", {
        templateUrl: "partials/books.html",
        controller: "CountryCtrl"
    })
    .when("/region", {
        templateUrl: "partials/books.html",
        controller: "RegionCtrl"
    })
    .otherwise("/");
});
