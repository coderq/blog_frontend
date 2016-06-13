var request = (function() {
	function obj2query(obj) {
		var query = '';
		for (var key in obj) {
			query += key + '=' + obj[key] + '&';
		}
		return query.substring(0, query.length - 1);
	}
	
	return {
		get: function(url, callback) {
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.open("GET", url, true);
			xmlhttp.send();
			xmlhttp.onreadystatechange = function() {
			  	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			    	callback && callback(xmlhttp.responseText);
			    }
			}
		},
		post: function(url, data, callback) {
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.open("POST", url, true);
			xmlhttp.send(obj2query(data));
			xmlhttp.onreadystatechange = function() {
			  	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			    	callback && callback(xmlhttp.responseText);
			    }
			}
		}
	};
}());