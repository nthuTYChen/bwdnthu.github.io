$(document).ready(function() {
	$('body > button:first-of-type').on('click', function() {
		$('body > div').addClass('selected');
	});
	$('body > button:last-of-type').on('click', function() {
		$('body > div').removeClass('selected');
	});
});