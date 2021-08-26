var menuOpen = false, touchMove = false;

$(document).ready(()=>{
	$(document).on('touchmove', ()=>{
		touchMove = true;
		setTimeout(()=>{
			touchMove = false;
		}, 500);
	});

	$('nav > a:first-of-type').on('touchend click', (event, selector)=>{
		//event.stopPropagation();
		if(event.type === 'touchend') {
			selector.off('click');
		}
		if(!touchMove) {
			let menuItems = $('nav > a').not(':first-of-type');
			let delay = 0;
			if(!menuOpen) {
				menuItems.each((index)=>{
					setTimeout(()=>{
						menuItems.eq(index).css('display', 'grid');
						menuItems.eq(index).animate({opacity: 0.5}, 300);
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
		}
	});
});