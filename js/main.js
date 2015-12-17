// js goes here
var movieApp = angular.module('movieApp', [
	'ngRoute',
	'movieControllers'
]);

movieApp.config(function($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: 'partials/landing.php',
		controller: 'movieCtrl'
	}).
	when('/:searchResult', {
		templateUrl: 'partials/searchResults.php',
		controller: 'resultsCtrl'
	}).
	otherwise({
		redirectTo: '/'
	});
});
