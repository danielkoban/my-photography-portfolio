// Menu button function

$(document).ready(function(){
	$('#menu-button').on('click', function(){
		$('nav').toggleClass('full-screen-menu');
		$('.fa-bars').toggleClass('twisted');
	});
});