// NOTE: No array -> we are not creating a module
var app = angular.module('MyModule');

var apiService = function ($http) {

    var getFirstTodo = function () {
        return $http.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => {
                return response.data;
            })
    }

    var getUserById = function (userId) {
        return $http.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => {
                return response.data;
            })
    }

    var getUsers = function () {
        return $http.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.data
            })
    }

    return {
        getFirstTodo,
        getUserById,
        getUsers
    }
}

app.factory('apiService', apiService);






