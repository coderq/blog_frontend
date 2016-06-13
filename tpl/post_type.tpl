		<ul class="panel">
			<% for (var i = 0, l = types.length; i < l; i++) { %>
			<li>
				<a href="/?type=<%=types[i].name%>"><%=types[i].name%></a><span class="badge"><%=types[i].count%></span>
			</li>
			<% } %>
		</ul>