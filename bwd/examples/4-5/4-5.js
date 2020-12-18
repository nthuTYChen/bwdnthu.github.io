$(document).ready(function () {
	$('nav > div').on('click', function() {
		var display = $(this).children().eq(0).css('display');
		if(display === 'none') {
			$('nav > div > div').css('display', 'none');
			$(this).children().css('display', 'block');
		}
		else {
			$(this).children().css('display', 'none');
		}
	});
});