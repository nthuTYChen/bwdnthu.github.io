$(document).ready(function() {
	/* Bind an event listener to the submit button. The callback function
	 automatically receives and 'event' object from the browser, which includes
	 details of the event (such as the type of the event and the element that 
	 triggers the event). See the section about "event propagation" section 
	 in the JS Basics unit in my course website */
	$('#submitItem').on('click', function(event) {
		// The default action of a submit button is to reload the current page,
		// so we need to use the preventDefault() function of the event object
		// to deactivate this action.
		event.preventDefault();
		var date = $('#dateInput').val(); // Get the value of #dateInput as date
		var content = $('#contentInput').val(); // Get the value of the #contentInput
		// Merge date and content and the HTML codes that corresponds to a table row
		// that will be inserted later.
		var listItem = '<tr><td>' + date + '</td><td>' + content + ' <a href="#">X</a></td>';
		// Insert the generated table row as the FIRST row inside tbody
		$('tbody').prepend(listItem);
	});

	// Bind an event listener to ALL Xs which, when triggered, remove the current table row
	$('td > a').on('click', function(event) {
		// The default action of <a> is to navigate to a link, but we don't need it here, 
		// so we need to de-activate it.
		event.preventDefault();
		/* Again, 'this' corresponds to a clicked <a>, and the jQuery function closest() find the
		 closest "ancestor" with the specified tag name. Together, the combination allows jQuery
		 to pin down the <tr> tag that contains the clicked <a>. The last remove() function simply
		 removes the target element(s), which in this case is the <tr> tag, and thus the target row. */
		$(this).closest('tr').remove();
	});
});