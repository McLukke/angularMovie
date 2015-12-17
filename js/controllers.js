var movieControllers = angular.module('movieControllers', []);

movieControllers.controller('movieCtrl', ['$scope', '$http', function($scope, $http) {

	var apiKey = '?api_key=df7ff8bb5e24f229bb2f9f2e59571656';
	var baseURL = 'https://api.themoviedb.org/3/';
	var upcomingURL = 'movie/upcoming';

	console.log(baseURL + upcomingURL + apiKey);

	$http({
		method: 'GET',
		url: baseURL + upcomingURL + apiKey
	}).success(function(data) {
		console.log(data);
	}).error(function(data, status) {
		console.log(data);
		console.log(status);
	});
}]);

movieControllers.controller('resultsCtrl', ['$scope', '$http', function($scope, $http) {

}]);
