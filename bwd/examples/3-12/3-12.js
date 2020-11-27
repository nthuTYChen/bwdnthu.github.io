function mouseEventMsg () {
	alert('Mouse event!');
};

window.onload = function() {
	var em = document.querySelector('body');
	em.addEventListener('click', function() {
		alert('Clicked!');
	});
	em.addEventListener('mouseenter', mouseEventMsg);
	em.addEventListener('mouseleave', mouseEventMsg);
	// When you remove an event listener, you need to provide the specific event to remove
	// as well as the name of the function originally bounded to the event
	em.removeEventListener('mouseleave', mouseEventMsg);
};