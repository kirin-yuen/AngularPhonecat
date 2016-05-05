'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource', function($resource){
	// The $resource service makes it easy to create a RESTful client
	// with just a few lines of code. This client can then be used in our application,
	// instead of the lower-level $http service.
	return $resource('phones/:phoneId.json', {}, {
		query: {
			method:'GET',
			params: {phoneId:'phones'},
			isArray:true
		}
	});
}]);