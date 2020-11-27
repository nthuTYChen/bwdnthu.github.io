function switchOneTwo() {
	var bg1 = document.getElementById('item1').style.backgroundColor;
	var bg2 = document.getElementById('item2').style.backgroundColor;
	document.getElementById('item1').style.backgroundColor = bg2;
	document.getElementById('item2').style.backgroundColor = bg1;
};

function switchTwoThree() {
	var bg2 = document.getElementById('item2').style.backgroundColor;
	var bg3 = document.getElementById('item3').style.backgroundColor;
	document.getElementById('item2').style.backgroundColor = bg3;
	document.getElementById('item3').style.backgroundColor = bg2;
};

window.onload = function() {
	var em = document.getElementById('switch12');
	em.addEventListener('click', switchOneTwo);
	em = document.getElementById('switch23');
	em.addEventListener('click', switchTwoThree);
};