var movieControllers = angular.module('movieControllers', []);

movieApp.controller('movieCtrl', function($scope, $http) {

	var apiKey = '?api_key=df7ff8bb5e24f229bb2f9f2e59571656';
	var baseURL = 'https://api.themoviedb.org/3';
	var upcomingURL = '/movie/upcoming';
	var configuration = '/configuration';

	$http.get(baseURL + configuration + apiKey).success(function(data) {
		console.log(data);
		$scope.imageBaseURL = data.images.base_url;
		$scope.imageBaseURL = $scope.imageBaseURL.slice(0,-1);
		console.log($scope.imageBaseURL);
	});

	$http({
		method: 'GET',
		url: baseURL + upcomingURL + apiKey,
		cache: true
	}).success(function(data) {
		// console.log(data);
		$scope.latestMovies = data.results;

		console.log($scope.latestMovies);
	}).error(function(data, status) {
		console.log(data);
		console.log(status);
	});


});

movieApp.controller('resultsCtrl', ['$scope', '$http', function($scope, $http) {

}]);

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
