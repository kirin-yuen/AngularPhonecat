'use strict';

// app.js : this file now holds the root module of our application.

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices',
  'phonecatAnimations'
]);

// $route service. This service makes it easy to wire together controllers,
// view templates, and the current URL location in the browser.  
phonecatApp.config(['$routeProvider', function($routeProvider) {

    // Providers can only be injected into config functions. 
    // Thus you could not inject $routeProvider into PhoneListCtrl.
    $routeProvider.when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).otherwise({
        redirectTo: '/phones'
      });
  }]);