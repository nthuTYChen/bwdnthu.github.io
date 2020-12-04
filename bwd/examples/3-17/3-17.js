function changeBg () {
	var buttonId = this.id;
	var divs = document.getElementsByTagName('div');
	for(var index = 0 ; index < divs.length ; index++) {
		var div = divs[index];
		if(div.id === buttonId + 'Div') {
			div.style.backgroundColor = 'green';
			break;
		}
	}
};

window.onload = function() {
	var buttons = document.getElementsByTagName('button');
	for(var index = 0 ; index < buttons.length ; index++) {
		var button = buttons[index];
		button.addEventListener('click', changeBg);
	}
};