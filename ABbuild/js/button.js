$(function() {
	$('.abbtn').on('click', function(e) {
		console.log(e.clientX);
		$(this).find(":after").css({
			"top": e.clientX,
			"left": e.clientY,
		});
	});
});