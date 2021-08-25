var menuOpen = false;

$(document).ready(()=>{
	$('nav > a:first-of-type').on('click touchend', (event)=>{
		event.stopPropagation();
		let menuItems = $('nav > a').not(':first-of-type');
		let delay = 0;
		if(!menuOpen) {
			menuItems.each((index)=>{
				setTimeout(()=>{
					menuItems.eq(index).css('display', 'grid');
					menuItems.eq(index).animate({opacity: 0.95}, 300);
				}, delay + (50 * index));
			});
		}
		else {
			menuItems.each((index)=>{
				setTimeout(()=>{
					menuItems.eq(index).animate({opacity: 0}, 300, ()=>{
						menuItems.eq(index).css('display', 'none');
					});
				}, delay + (50 * index));
			});
		}
		menuOpen = !menuOpen;
	});
});