$(document).ready(function () {
	$('nav > span').on('click', function () {
		var displayed = $(this).siblings().eq(0).css('display') === 'block';
		if(displayed) {
			$(this).siblings().css('display', 'none');
		}
		else {
			$(this).siblings().css('display', 'block');
		}
	});
});