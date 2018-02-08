$(function() {
	$(".abbtn-ripple").on("click", function (e) {

	  // Remove any old one
	  $(".ripple").remove();

	  // Setup
	  var posX = $(this).offset().left,
	      posY = $(this).offset().top,
	      buttonWidth = $(this).width(),
	      buttonHeight =  $(this).height();

	  // Add the element
	  $(this).prepend("<span class='ripple'></span>");

	  $(this).css({
	  	/* this fixes the overflow:hidden in Chrome */
		"-webkit-mask-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC)"
	  });

	 // Make it round!
	  if(buttonWidth >= buttonHeight) {
	    buttonHeight = buttonWidth;
	  } else {
	    buttonWidth = buttonHeight; 
	  }

	  // Get the center of the element
	  var x = e.pageX - posX - buttonWidth / 2;
	  var y = e.pageY - posY - buttonHeight / 2;


	  // Add the ripples CSS and start the animation
	  $(".ripple").css({
	    width: buttonWidth,
	    height: buttonHeight,
	    top: y + 'px',
	    left: x + 'px'
	  }).addClass("rippleEffect");

	  var animateDuration = buttonWidth;
	  while(animateDuration > 1) {
	  	animateDuration /= 10;
	  }

	  $(".rippleEffect").css({
	  	"animation-duration": animateDuration / 2 + 's'
	  });

	  setTimeout(() => {
	  	// $(".ripple.rippleEffect").remove();
	  	$(this).css({
	  	/* this fixes the overflow:hidden in Chrome */
			"-webkit-mask-image": "none"
		});
	  }, animateDuration * 1000);
	});
});