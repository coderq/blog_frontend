	<nav>
		<ul>
			<% for (var i = 0; i < nav.length; i++) { %>
			<li>
				<a href="<%= nav[i].href %>" title="<%= nav[i].title %>">
					<span class='icon icon-<%= nav[i].icon %>'></span><%= nav[i].text %>
				</a>
			</li>
			<% } %>
		</ul>
	</nav>
	<h1 class="nowrap"><%= title %></h1>
	<h2 class="nowrap"><%= subtitle %></h2>