var app = angular.module('MyModule');

var PreviousController = function ($scope, apiService) {
    $scope.message = "Hello world"
    $scope.shouldBeVisible = false
    // default value
    $scope.userId = 1
    $scope.isLoading = false

    if($scope.shouldBeVisible){
        apiService.getFirstTodo()
            .then(response => {
                $scope.user = response
            })
    }

    $scope.search = function () {
        $scope.isLoading = true

        apiService.getUserById($scope.userId)
            .then(response => {
                $scope.isLoading = false
                $scope.user = JSON.stringify(response, null, 4)
            })
    }

    $scope.getUsers = function () {
        apiService.getUsers()
            .then(response => {
                $scope.users = response
            })
    }
}

var MainController = function ($scope, apiService) {
    alert("Main controller loaded")
}

app.controller('PreviousController', PreviousController);
app.controller('MainController', MainController);
