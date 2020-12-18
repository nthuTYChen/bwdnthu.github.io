$(document).ready(function () {
	$('nav > div > div:first-of-type').on('click', function () {
		$('nav > div > div:not(:first-of-type)').css('display', 'none');
		$(this).siblings().css('display', 'block');
	});
});