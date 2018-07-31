// Photo slider function

$(document).ready(function(){
	const forward = function(){
		var currentImg = $('.show');
		var nextImg = currentImg.next();

		if(nextImg.length) {
			currentImg.removeClass('show').css('z-index', -10);
			nextImg.addClass('show').css('z-index', 10);
		}
	};

	const back = function(){
		var currentImg = $('.show');
		var prevImg = currentImg.prev();

		if(prevImg.length) {
			currentImg.removeClass('show').css('z-index', -10);
			prevImg.addClass('show').css('z-index', -10);
		}
	};

	$('#next').on('click', forward);
	$('#prev').on('click', back);
	$('body').on('keyup', function(e){
		if((e.keyCode || e.which) == 39) {
			forward();
		} 
		if((e.keycode || e.which) == 37) {
			back();
		}
	});
});