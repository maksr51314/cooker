'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.when('/contacts', {templateUrl: 'partials/menu/contacts.html', controller: 'MainController'});
    $routeProvider.when('/about-us', {templateUrl: 'partials/menu/about-us.html', controller: 'MainController'});
    $routeProvider.when('/main', {templateUrl: 'partials/menu/main.html', controller: 'MainController'});
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);
