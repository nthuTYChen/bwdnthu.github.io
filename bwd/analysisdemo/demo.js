var menuOpen = false;

$(document).ready(()=>{
	$('nav > a:first-of-type').on('click touchend', ()=>{
		let menuItems = $('nav > a').not(':first-of-type');
		menuItems.each((index)=>{
			let delay = 0;
			setTimeout(()=>{
				if(!menuOpen) {
					menuItems.eq(index).css('display', 'grid');
					menuItems.eq(index).animate({opacity: 0.95}, 300);
				}
				else {
					menuItems.eq(index).animate({opacity: 0}, 300, ()=>{
						menuItems.eq(index).css('display', 'none');
					});
				}
			}, delay + (50 * index));
		});
		menuOpen = !menuOpen;
	});
});