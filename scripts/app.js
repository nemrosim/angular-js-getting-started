var app = angular.module('MyModule', ['ngRoute']);

var routeProvider = function ($routeProvider) {
    $routeProvider.when("/main", {
        templateUrl: "main.html",
        controller: "MainController"
    }).when("/previous", {
        templateUrl: "previous.html",
        controller: "PreviousController"
    }).otherwise({redirectTo: '/main'})
}

app.config(routeProvider)
