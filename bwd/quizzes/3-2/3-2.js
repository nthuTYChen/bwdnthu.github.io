function add (x, y) {
	var result = x + y;
	var msg = 'The sum of ' + x + ' and ' + y + ' is ' + result;
	return msg;
}

function substract (x, y) {
	var result = y - x;
	var msg = 'The result of ' + y + ' minus ' + x + ' is ' + result;
	return msg;
}

function multiply (x, y) {
	var result = x * y;
	var msg = 'The product of ' + x + ' and ' + y + ' is ' + result;
	return msg;
}

function divide (x, y) {
	var result = x / y;
	var msg = 'The result of ' + x + '/' + y + ' is ' + result;
	return msg;
}

var basicMath = {
	add: add,
	substract: substract,
	multiply: multiply,
	divide: divide
};

console.log(basicMath.add(10, 21)); // The sum of 10 and 21 is 31.
console.log(basicMath.substract(10, 21)); // The result of 21 minus 10 is 11.
console.log(basicMath.multiply(5, 17)); // The product of 5 and 17 is 85.
console.log(basicMath.divide(80, 4)); // The result of 80 / 4 is 20.  