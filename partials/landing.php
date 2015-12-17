<h1>This is my own Movie Database</h1>

<form ng-submit="searchMovie()">
	<input ng-model="searchMovie" />
	<input type="submit" value="search" />
</form>

<ul>
	<li ng-repeat="upcoming in latestMovies">
		<a href="#/{{upcoming.title | encodeURI}}">
			<img ng-src="{{imageBaseURL}}{{imageSizeSmall}}{{upcoming.poster_path}}" /><br />
			{{upcoming.title}}<br />
			{{upcoming.release_date}}
		</a>
	</li>
</ul>
