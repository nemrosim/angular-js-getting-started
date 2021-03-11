var app = angular.module('MyModule', []);

var MyController = function($scope, $http){
    $scope.message = "Hello world"

    $http.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            $scope.user = response.data
        })
}

app.controller('MyController', MyController);
