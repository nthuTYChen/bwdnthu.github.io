/* In this demo, I try to show how to make a scrolling effect 
   that gradually slides up and present all DIVs that are inside the current viewport.
   Here's what we need to do:
   1. Check how far each DIV is from the top edge of the HTML document.
   2. Check the height of the current viewport.
   3. Check how far the current viewport has been scrolled from the top of the document. 
   4. Check if the height of the current viewport PLUS the scrolling distance is more than the distance 
      between an DIV and the top edge of the HTML document. If so, it means the DIV is in the current
      viewport, and the animation effect should be applied to this DIV.
   5. Do all of the above steps when (1 the document is ready, because the first few DIVs must be in the 
      current viewport already, and (2 whenever the window is scrolled down. */

// This is a function that does the steps 1-4 above.
function slideUpTarget() {
	// Get all DIVs from the HTML document
	var divs = $('div');
	
	/* Get the viewport height. $(window) should be used in this line,
	 not $(document). In my lecture, I used $(document).height(), which 
	 get the height of the ENTIRE DOCUMENT, and since every single DIV
	 is contained inside this document height, the animation effect wrongly
	 applies to all DIVs. */
	var vh = $(window).height();

	/* Get the scrolling distance */
	var scrollTop = $(window).scrollTop();

	// The jQuery function each() allows you to do something to each of 
	// selected elements - the DIVs in this demo.
	divs.each(function () {
		// 'this' corresponds to a DIV extracted by the each() function,
		// and offset().top gets you the distance between this DIV and the top edge of the document.
		var divTop = $(this).offset().top;

		// See Step 4 above.
		if(vh + scrollTop > divTop) {
			$(this).animate({top: 0, opacity: 1}, 1000);
		}
	});
};

// Do things when the document structure is fully loaded.
$(document).ready(function() {
	// Case 5(1
	slideUpTarget();
	// Case 5(2
	$(document).on('scroll', function() {
		slideUpTarget();
	});
});