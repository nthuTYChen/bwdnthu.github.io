$(document).ready(function() {
	$('body > button').on('click', function() {
		// $('body > div').css('background-color', 'green');
		$('body > div').css(
			{
				'background-color': 'green',
				'height': '70px',
				'width': '70px'
			}
		);
	});
});