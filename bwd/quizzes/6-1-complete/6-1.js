$(document).ready(function() {
	$('div').on('mouseenter', function() {
		var screenWidth = $(document).width();
		var screenHeight = $(document).height();
		var newPosX = Math.random() * screenWidth;
		var newPosY = Math.random() * screenHeight;
		if(screenWidth < newPosX + 100) {
			newPosX = screenWidth - 100;
		}
		if(screenHeight < newPosY + 100) {
			newPosY = screenHeight - 100;
		}
		$(this).animate({top: newPosY + 'px', left: newPosX + 'px'}, 200);
	});
});