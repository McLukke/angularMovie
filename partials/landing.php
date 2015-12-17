<ul>
	<li ng-repeat="upcoming in latestMovies">
		<img ng-src="{{imageBaseURL}}{{upcoming.poster_path}}" />
		{{upcoming.title}}
		{{upcoming.release_date}}
	</li>
</ul>
