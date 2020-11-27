window.onload = function () {
	var allGroupEm = document.getElementsByClassName('group1');
	var groupEm = allGroupEm[0];
	console.log(groupEm);
	console.log(groupEm.innerHTML);
	groupEm.innerHTML = 'Content changed!';
	var idEm = document.getElementById('no6');
	idEm.innerHTML = 'No 6 changed!';
	idEm.style.color = 'red';
	idEm.style.backgroundColor = 'black';
	// font-size = fontSize, text-align = textAlign
	idEm.style.marginLeft = '5px';
};