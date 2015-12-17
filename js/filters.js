angular.module('encodeURI', []).filter('encodeURI', function() {
	return window.encodeURI;
});
