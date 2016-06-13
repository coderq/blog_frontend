window.onload = function() {
	var page = query.page || 1;
	var limit = query.limit || 10;
	loadList(page, limit, render);
	loadHeader();
	loadClock();
};

var post_list_tpl, post_type_tpl, pagination_tpl, 
	header_tpl, clock_tpl;

function loadClock () {
	var clock_html;
	var d_clock = document.querySelector('#Clock');

	request.get('/tpl/clock.tpl', function(tpl) {
		clock_html = tpl;
		d_clock.innerHTML = clock_html;
	});
}

function loadHeader () {
	var url = '/service/header';
	
	request.get(url, renderHeader);
}

function renderHeader(data) {
	var header_html;
	var d_header = document.querySelector('header');

	data = JSON.parse(data);

	if (!header_tpl) {
		request.get('/tpl/header.tpl', function(tpl) {
			header_html = template.compile(header_tpl = tpl)(data);
			d_header.innerHTML = header_html;
		});
	} else {
		header_html = template.compile(header_tpl)(data);
		d_header.innerHTML = header_html;
	}

	var d_title = document.querySelector('title');
	d_title.innerHTML = data.seo.title;
}

function loadList (page, limit, callback) {
	var url = '/service';
	
	page = page || 1;
	limit = limit || 10;
	url += '?page=' + page + '&limit=' + limit;

	if (query.type) url += '&type=' + query.type;
	if (query.tag) url += '&tag=' + query.tag;
	
	request.get(url, callback);
}

function onSkip (page) {
	loadList(page, 10, render);
}

function render (data) {
	var post_list_html, post_type_html, pagination_html;
	var d_center = document.querySelector('#PostList'), 
		d_type = document.querySelector('#PostType');
		d_pagination = document.querySelector('#Pagination');

	data = JSON.parse(data);
	
	if (!post_list_tpl) {
		request.get('/tpl/post_list.tpl', function(tpl) {
			post_list_html = template.compile(post_list_tpl = tpl)(data);
			d_center.innerHTML = post_list_html;
		});
	} else {
		post_list_html = template.compile(post_list_tpl)(data);
		d_center.innerHTML = post_list_html;
	}

	if (!post_type_tpl) {
		request.get('/tpl/post_type.tpl', function(tpl) {
			post_type_html = template.compile(post_type_tpl = tpl)(data);
			d_type.innerHTML = post_type_html;
		});
	} else {
		post_type_html = template.compile(post_type_tpl)(data);
		d_type.innerHTML = post_type_html;
	}

	var pg = {page: data.page, limit: data.limit};
	pg.total = Math.ceil(data.total / data.limit);
	pg.from = Math.min(data.page, Math.max(1, data.page - 5));
	pg.to = Math.max(data.page, Math.min(pg.total, data.page + 5));
	if (pg.from === pg.to) return;
	
	pg.prev = data.page === 1 ? null : data.page - 1;
	pg.next = data.page === pg.total ? null : data.page + 1;
	pg.url = '/?';
	if (query.type) pg.url += '&type=' + query.type;
	if (query.tag) pg.url = '&tag=' + query.tag;
	
	if (!pagination_tpl) {
		request.get('/tpl/pagination.tpl', function(tpl) {
			pagination_html = template.compile(pagination_tpl = tpl)(pg);
			d_pagination.innerHTML = pagination_html;
		});
	} else {
		pagination_html = template.compile(pagination_tpl)(pg);
		d_pagination.innerHTML = pagination_html;
	}
}