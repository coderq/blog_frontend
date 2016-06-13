var query = (function(href) {
	var query = href.split('?');
	
	if (query.length != 2) return {};

	return query[1].split('&').reduce(function(prev, curr) {
		var item = curr.split('=');
		
		if (item.length != 2) return prev;

		prev[item.shift()] = item.shift();

		return prev;
	}, {});
}(window.location.href));