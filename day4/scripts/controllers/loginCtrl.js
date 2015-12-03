/**
 * Created by Puneet on 02-Dec-15.
 */
var app = angular.module('myApp')

app.controller('LoginCtrl', function($scope,$http,$location){

    $scope.login = function(){
        $http({
            url: 'login.json',
            method: 'POST',
            data: {"name": "Puneet"}
        }).success(function(data, status, headers, config){
            console.log('Data Fetched Successfully');
            console.log(status)
            if(data.auth){
                $location.path("/pd")
            }
            else{
                $scope.errorMessage = "Invalid User/Password"
            }
            $scope.employeesList = data

        }).error(function(data){
            console.log('Error fetching data')
        })
    }

})