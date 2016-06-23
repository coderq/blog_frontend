window.onload = function() {
	var article = window.location.href.split('?').pop();
	if (!article) return;

	loadArticle(article);
	loadHeader();
	loadClock();
};

var article_tpl, header_tpl, clock_tpl;

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

function loadArticle(name) {
	request.get('/service/article/' + name, renderArticle);
}

function renderArticle(data) {
	var article_html;
	var d_article = document.querySelector('#ArticleBody');

	data = JSON.parse(data);
	data.marked = marked;
	data.renderer = new marked.Renderer();

	if (!article_tpl) {
		request.get('/tpl/article.tpl', function(tpl) {
			article_html = template.compile(article_tpl = tpl)(data);
			d_article.innerHTML = article_html;
		});
	} else {
		article_html = template.compile(article_tpl)(data);
		d_article.innerHTML = article_html;
	}
}