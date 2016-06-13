	<nav>
		<ul>
			<% for (var i = 0; i < nav.length; i++) { %>
			<li><a href="<%= nav[i].href %>"><span class='icon icon-<%= nav[i].icon %>'></span><%= nav[i].text %></a></li>
			<% } %>
		</ul>
	</nav>
	<h1><%= title %></h1>
	<h2><%= subtitle %></h2>