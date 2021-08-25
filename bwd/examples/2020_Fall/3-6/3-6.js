var name = 'TY Chen';
var age = 39;
var affiliation = 'NTHU';

var profile = {
	name: 'TY Chen',
	age: 39,
	affiliation: 'NTHU',
	height: 180,
	weight: 72,
	/*homePhone: 2227682149,
	mobilePhone: [1231231, 13121231, 2312312]*/
	contact: {
		home: 227682149,
		mobile: [938657213, 834762562, 872132566]
	}
};

console.log(profile.name);
console.log(profile['name']);

profile.gender = 'male';

console.log(profile.gender);

console.log(profile.contact.home);

console.log(profile.contact.mobile[1]);

console.log(name.length);

console.log(profile.contact.mobile.length);