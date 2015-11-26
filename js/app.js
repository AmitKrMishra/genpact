/**
 * Created by Puneet on 26-Nov-15.
 */
var app = angular.module('myApp', []);
app.run(function($rootScope){
    $rootScope.name = "Puneet"
})