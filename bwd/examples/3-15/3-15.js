function changeBg () {
	var buttonId = this.id;
	var target = document.getElementById(buttonId + 'Div');
	if(!target) {
		alert('No element is found: ' + buttonId + 'Div');
	}
	else {
		/*if(buttonId === 'block1') {
			target.style.backgroundColor = 'yellow';
		}
		else if (buttonId === 'block2') {
			target.style.backgroundColor = 'orange';
		}
		else {
			target.style.backgroundColor = 'green';
		}*/
		if(buttonId === 'block1' || buttonId === 'block2') {
			target.style.backgroundColor = 'yellow';
		}
		else {
			target.style.backgroundColor = 'green';
		}
		// AND = A && B
		// A || (B && C)
	}
}

window.onload = function() {
	//let condition = 5 > 4;
	//let condition = 4 > 5;
	// <, >=, <=, !=
	//let condition = '5' == 5;
	//let condition = '5' === 5;
	/*let condition = '5' !== 5;
	if(condition) {
		console.log('true');
	}
	else {
		console.log('false');
	}*/
	var buttons = document.getElementsByTagName('button');
	buttons[0].addEventListener('click', changeBg);
	buttons[1].addEventListener('click', changeBg);
	buttons[2].addEventListener('click', changeBg);
	buttons[3].addEventListener('click', changeBg);
};