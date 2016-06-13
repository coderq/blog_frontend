		<%for (var i = 0, il = articles.length; i < il; i++) {%>
		<div class="panel">
			<div class="right">
				<label class="time"><span class="icon icon-clock"></span><%=articles[i].conf.date%></label>
			</div>
			<h3 class="nowrap">
				<span class="icon-doc-text-inv"></span>
				[<a class="category" href="/?type=<%=articles[i].conf.categories%>"><%=articles[i].conf.categories%></a>]
				<a href="/article?<%=articles[i].file%>"><%=articles[i].conf.title%></a>
			</h3>
			<div class="right">
				<label><span class="icon icon-eye"></span>0</label>
				<label><span class="icon icon-thumbs-up"></span>0</label>
				<label><span class="icon icon-thumbs-down"></span>0</label>
			</div>
			<div class="left">
				<%for (var j = 0, jl = (articles[i].conf.tags || []).length; j < jl; j++) {%>
				<label>
					<span class="icon-tag"></span>
					<a href="/?tag=<%=articles[i].conf.tags[j]%>"><%= articles[i].conf.tags[j] %></a>
				</label>
				<%}%>
			</div>
		</div>
		<%}%>