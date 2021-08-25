$(document).ready(function() {
	$('#hideDiv').on('click', function () {
		$('div').hide('fast');
	});

	$('#showDiv').on('click', function() {
		$('div').show('slow');
	});
});