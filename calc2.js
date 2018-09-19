function add(a, b) {
	return a + b;
}

function sub(a, b) {
	return a - b;
}

function mul(a, b) {
	return a * b;
}

function div(a, b) {
	if(b == 0) {
		return new Error('Zero Divider Error');
	}
	return a / b;
}

function getE(a, b) {
	return Math.E;
}

module.exports = {
	add: add, 
	sub: sub, 
	mul: mul, 
	div: div, 
	getE: getE
}