$(document).ready(function() {
	/*document.querySelectorAll('body > button')[0].addEventListener('click', function() {
		alert('Button 1 clicked!');
	});*/
	$('body > button').eq(0).on('click', function() {
		alert('Button 1 clicked!');
		$(this).off('click');
	});
	$('body > button').eq(1).on('click', function() {
		alert('Button 2 clicked!');
		$(this).off('click');
	});
});