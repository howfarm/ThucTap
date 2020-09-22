var app = angular.module('myApp', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'index2.html',
        })
        .when('/hoidap', {
            templateUrl: 'hoidap.html',
        })
        .when('/tintuc', {
            templateUrl: 'tintuc.html',
        })
});