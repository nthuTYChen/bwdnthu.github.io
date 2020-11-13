var numArray = [1, 5, 2, 11, 7];

//console.log(numArray);

var anArrayValue = numArray[0];

//console.log(anArrayValue);

anArrayValue = numArray[1];

//console.log(anArrayValue);

var mixedArray = [1, 'hello!', 'yes!', 9, 87]; // Bad practice

var profile = ['TY Chen', 'NTHU', 39, 180, 72]; // Name, Affliation, Age, Height, Weight

//console.log(profile[0]);

var phoneNums = [937149506, 977123543, 98278347]; // Good practice

var emptyArray = [];

emptyArray[0] = 1;

//console.log(emptyArray);

emptyArray = [];

emptyArray[2] = 1; // Avoid!

console.log(emptyArray);