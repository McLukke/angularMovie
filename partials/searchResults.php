here are the search results:

<ul>
	<li ng-repeat="result in results">
	<img ng-src="{{imageBaseURL}}{{imageSizeSmall}}{{result.post_path}}" />
	{{result.title}}
	{{result.release_date}}
	{{result.backdrop_path}}
	{{result.overview}}
	</li>
</ul>