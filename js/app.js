(function() {
	'use strict';
	document.addEventListener('DOMContentLoaded', function() {
		
		const menuMovil = document.querySelector('.movil i');

		const movil = document.querySelector('.menu-movil');

		const x = document.querySelector('.x');

		menuMovil.addEventListener('click', function() {
			movil.style.margin = "0"
		})

		x.addEventListener('click', function() {
			movil.style.margin = "0 -18rem 0 0"
		})
	}
	)
})();