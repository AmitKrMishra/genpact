/**
 * Created by Puneet on 02-Dec-15.
 */
var app = angular.module('myApp', ['ngRoute','ui.bootstrap'])

app.config(function($routeProvider){
    console.log('In Config')
    $routeProvider.when("/", {
        templateUrl: 'partial/login.html',
        controller: 'LoginCtrl'
    }).when("/pd", {
        templateUrl: 'partial/pd.html',
        controller: 'CarouselDemoCtrl'
    })
})

