	var apiKey = 'api_key=df7ff8bb5e24f229bb2f9f2e59571656';
	var baseURL = 'https://api.themoviedb.org/3';
	var upcomingURL = '/movie/upcoming';
	var configuration = '/configuration';
	var searchURL = '/search/movie';

var movieControllers = angular.module('movieControllers', []);

movieApp.controller('movieCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {

	$http.get(baseURL + configuration + '?' + apiKey).success(function(data) {
		// console.log(data);
		$scope.imageSizeSmall = data.images.poster_sizes[2] + '/';
		$scope.imageSizeLarge = data.images.poster_sizes[6] + '/';
		$scope.imageBaseURL = data.images.secure_base_url;
		// $scope.imageBaseURL = $scope.imageBaseURL.slice(0,-1);

		// console.log($scope.imageSizeSmall);
		// console.log($scope.imageSizeLarge);
		// console.log($scope.imageBaseURL);
	});

	$http({
		method: 'GET',
		url: baseURL + upcomingURL + '?' + apiKey,
		cache: true
	}).success(function(data) {
		// console.log(data);
		$scope.latestMovies = data.results;
		// console.log($scope.latestMovies);
	}).error(function(data, status) {
		console.log(data);
		console.log(status);
	});

	$scope.searchMovie = function() {
		if ($scope.searchParam === "" || $scope.searchParam === undefined) {
			console.log('cannot search empty strings');
		} else {
			$location.path('/' + $scope.searchParam);
		}
		$scope.searchParam = "";
	};
}]);

movieApp.controller('resultsCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	console.log($routeParams.searchResult);

	$http.get(baseURL + configuration + apiKey).success(function(data) {
		// console.log(data);
		$scope.imageSizeSmall = data.images.poster_sizes[2] + '/';
		$scope.imageSizeLarge = data.images.poster_sizes[6] + '/';
		$scope.imageBaseURL = data.images.secure_base_url;
		// $scope.imageBaseURL = $scope.imageBaseURL.slice(0,-1);

		// console.log($scope.imageSizeSmall);
		// console.log($scope.imageSizeLarge);
		// console.log($scope.imageBaseURL);
	});

	query = '?query=' + encodeURI($routeParams.searchResult);
	console.log(query);
	console.log(baseURL + searchURL + query + '&' + apiKey);

	$http({
		method: 'GET',
		url: baseURL + searchURL + '&' + apiKey,
		cache: true
	}).success(function(data) {
		// console.log(data);
		$scope.results = data.results;
		// console.log($scope.latestMovies);
	}).error(function(data, status) {
		console.log(data);
		console.log(status);
	});


	// this is where it stops working on localhost


	// // return movie objects with important details:
	// .poster_path
	// .overview
	// .title
	// .release_date
	// .id
	// .backdrop_path
}]);
