$(document).ready(function() {
	$('button').eq(0).on('click', function () {
		$('div').css({
			'height': '50px',
			'width': '50px'
		});
		$('div:nth-of-type(odd)').css({
			'height': '100px',
			'width': '100px'
		});
		//$('div').removeClass('selected');
		//$('div:nth-of-type(odd)').addClass('selected');
	});
	$('button').eq(1).on('click', function () {
		$('div').removeClass('selected');
		$('div:nth-of-type(even)').addClass('selected');
	});
	$('button').eq(2).on('click', function () {
		$('div').removeClass('selected');
	});
});