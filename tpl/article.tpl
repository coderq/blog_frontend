	<div class="panel">
		<h1><%= title %></h1>
		<p><span class="icon-clock"></span><%= date %></p>
		<p>
			<% for (var i = 0; i < tags.length; i++) { %>
			<span class="icon-tag"></span><a href="/?type=<%= tags[i] %>"><%= tags[i] %></a>
			<% } %>
		</p>
		<hr>
		<%== marked(content, {renderer: renderer}) %>
	</div>