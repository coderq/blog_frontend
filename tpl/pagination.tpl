
			<% if (prev) { %>
			<li class="nowrap"><a href="<%=(url + '&page=' + prev + '&limit=' + limit)%>">上一页</a></li>
			<% } else { %>
			<li class="nowrap"><label>上一页</label></li>
			<% } %>

			<% for (var i = from; i <= to; i++) { %>
			<% if (i === page) { %>
			<li class="active num"><a href="<%=(url + '&page=' + i + '&limit=' + limit)%>"><%= i %></a></li>
			<% } else { %>
			<li class="num"><a href="<%=(url + '&page=' + i + '&limit=' + limit)%>"><%= i %></a></li>
			<% } %>
			<% } %>
			
			<% if (next) { %>
			<li class="nowrap"><a href="<%=(url + '&page=' + next + '&limit=' + limit)%>">下一页</a></li>
			<% } else { %>
			<li class="nowrap"><label>下一页</label></li>
			<% } %>