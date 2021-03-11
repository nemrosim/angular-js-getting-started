var app = angular.module('MyModule', []);

var MyController = function ($scope, $http) {
    $scope.message = "Hello world"
    $scope.shouldBeVisible = false
    $http.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            $scope.user = response.data
        })
}

var FormController = function ($scope, $http) {
    // default value
    $scope.userId = 1
    $scope.isLoading = false

    $scope.search = function () {
        $scope.isLoading = true

        $http.get(`https://jsonplaceholder.typicode.com/users/${$scope.userId}`)
            .then(response => {
                $scope.isLoading = false
                $scope.user = JSON.stringify(response.data, null, 4)
            })
    }
}

var UsersController = function ($scope, $http) {
    $scope.getUsers = function () {
        $http.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                $scope.users = response.data
            })
    }
}

app.controller('MyController', MyController);
app.controller('FormController', FormController);
app.controller('UsersController', UsersController);
