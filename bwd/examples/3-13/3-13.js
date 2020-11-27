function resetBg () {
	var em = document.getElementById('item1');
	em.style.backgroundColor = 'red';
	em = document.getElementById('item2');
	em.style.backgroundColor = 'red';
	em = document.getElementById('item3');
	em.style.backgroundColor = 'red';
	em = document.getElementById('item4');
	em.style.backgroundColor = 'red';
}

function changeBg1 () {
	resetBg();
	var em = document.getElementById('item1');
	em.style.backgroundColor = 'blue';
}

function changeBg2 () {
	resetBg();
	var em = document.getElementById('item2');
	em.style.backgroundColor = 'blue';
}

function changeBg3 () {
	resetBg();
	var em = document.getElementById('item3');
	em.style.backgroundColor = 'blue';
}

function changeBg4 () {
	resetBg();
	var em = document.getElementById('item4');
	em.style.backgroundColor = 'blue';
}

window.onload = function() {
	var em = document.getElementById('item1');
	em.addEventListener('click', changeBg1);
	em = document.getElementById('item2');
	em.addEventListener('click', changeBg2);
	em = document.getElementById('item3');
	em.addEventListener('click', changeBg3);
	em = document.getElementById('item4');
	em.addEventListener('click', changeBg4);
};