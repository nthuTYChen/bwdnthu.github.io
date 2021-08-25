$(document).ready(function () {
	$('#animateDiv').on('click', function() {
		$('div').animate({left: '100px', opacity: 1}, 1000);
	});
});

// animate({display: 'none'}, 1000) // Doesn't work
// animate({font: '16px 16px sans-serif'}, 1000) // Doesn't work