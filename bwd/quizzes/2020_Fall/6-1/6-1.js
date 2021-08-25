$(document).ready(function() {
	$('div').on('mouseenter', function() {
		/* In my lecture the following two lines included $(document).width() and $(document).height(),
		 but since we want to limit the random movements of the 'Ha!' block to the browser viewport,
		 it's actually more appropriate to use $(window).width() and $(window).height().
		 This is because the height/width of an HTML document could be smaller/bigger than the viewport
		 width/height, so using $(document) does not necessarily get you the viewport width / height. */
		var screenWidth = $(window).width();
		var screenHeight = $(window).height();

		/* After getting the viewport height / width, you can multiply these dimensions with
		 a random number between 0 and 0.9999999... generated using Math.random(). Then you
		 get new x/y coordinates for the next position of the 'Ha!' block. */
		var newPosX = Math.random() * screenWidth;
		var newPosY = Math.random() * screenHeight;

		/* The following lines check if the new coordinates plus the width/height of the 'Ha!' div
		 goes beyond the viewport. For example, if the viewport width is 1200 pixels, and the randomly
		 generated x coordinate is 1140 pixels, and with the width of the 'Ha!' div, which is 100 pixels, 
		 the div would partially exceed the viewport boundary. So in the following lines, if this happens, 
		 100 is subtracted from the randomly generated coordinates to make sure that the new coordinates 
		 remain inside the viewport scope. */
		if(screenWidth < newPosX + 100) {
			newPosX = screenWidth - 100;
		}
		if(screenHeight < newPosY + 100) {
			newPosY = screenHeight - 100;
		}
		$(this).animate({top: newPosY + 'px', left: newPosX + 'px'}, 200);
	});
});