// Photo slider function

$(document).ready(function(){
	$('#next').on('click', function() {
		var currentImg = $('.show');
		var nextImg = currentImg.next();

		if(nextImg.length) {
			currentImg.removeClass('show').css('z-index', -10);
			nextImg.addClass('show').css('z-index', 10);
		}
	});

	$('#prev').on('click', function() {
		var currentImg = $('.show');
		var prevImg = currentImg.prev();

		if(prevImg.length) {
			currentImg.removeClass('show').css('z-index', -10);
			prevImg.addClass('show').css('z-index', -10);
		}
	});
});