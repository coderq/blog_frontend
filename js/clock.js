+function() {
	'use strict';
	
	function addClass(className) {
		var classes = this.className.split(' ');
		if (!~classes.indexOf(className)) classes.push(className);
		this.className = classes.join(' ');
	}
	function removeClass(className) {
		this.className = this.className
			.replace(new RegExp(className, 'ig'), '')
			.replace(/\s+/g, ' ')
			.trim();
	}

	window.ori_s_deg = window.ori_m_deg = window.ori_h_deg = 0;
	
	setInterval(function() {
		var date = new Date();
		var second = date.getSeconds();
		var minute = date.getMinutes();
		var hour = date.getHours();
		
		var s_deg = ori_s_deg + second * 360 / 60 - 90;
		var m_deg = ori_m_deg + (minute + second / 60) * 360 / 60 - 90;
		var h_deg = ori_h_deg + (hour + minute / 60 + second / 3600) * 360 / 12 - 90;

		var d_hour = document.querySelector('.clock .hour');
		var d_minute = document.querySelector('.clock .minute');
		var d_second = document.querySelector('.clock .second');

		if (h_deg % 360 == -90) {
			ori_h_deg += 360;
			h_deg += 360;
		}
		d_hour.style.transform = 'rotate(' + h_deg + 'deg)';

		if (m_deg % 360 == -90) {
			ori_m_deg += 360;
			m_deg += 360;
		}
		d_minute.style.transform = 'rotate(' + m_deg + 'deg)';	

		if (s_deg % 360 == -90) {
			ori_s_deg += 360;
			s_deg += 360;
		}
		d_second.style.transform = 'rotate(' + s_deg + 'deg)';
	}, 500);
}();