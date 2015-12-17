// js goes here
var movieApp = angular.module('movieApp', [
	'ngRoute',
	'movieControllers'
]);

movieApp.config(function($routeProvider) {
	$routeProvider.
	when('/', {
		templateURL: 'partials/landing.php',
		controller: 'movieCtrl'
	}).
	when('/:searchResult', {
		templateURL: 'partials/searchResults.php',
		controller: 'resultsCtrl'
	}).
	otherwise({
		redirectTo: '/'
	});
});
