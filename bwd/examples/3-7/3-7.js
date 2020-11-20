//actionCompleted();

function actionCompleted () {
	alert('Completed!');
}

//actionCompleted();

//actionCompletedAgain();

var actionCompletedAgain = function () {
	alert('Completed again!');
};

//actionCompletedAgain();

function popupMsg (msg) {
	var finalMsg = 'Site message: ' + msg;
	alert(finalMsg);
}

//popupMsg('Test!');
//popupMsg('Warning!');

function userMsg (name, msg = 'nothing') {
	var finalMsg = name + ' says: ' + msg;
	alert(finalMsg);
}

//userMsg('Victor', 'Surprise!');
//userMsg('Victor');

function complexCalc (x, y) {
	var result = 0;
	result = x * y;
	result = result / (x - y);
	result = result * y - x;
	return result;
}

//var finalResult = complexCalc(5, 10);
//alert(result);

var demoFuncs = {
	popupMsgFunc: popupMsg,
	userMsgFunc: userMsg,
	complexCalcFunc: complexCalc
};

demoFuncs.userMsgFunc('Victor', 'I am calling a function in an object.')