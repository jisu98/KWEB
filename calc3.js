exports.add = function(a, b) {
	return a + b;
}

exports.sub = function(a, b) {
	return a - b;
}

exports.mul = function(a, b) {
	return a * b;
}

exports.div = function(a, b) {
	if(b == 0) {
		return new Error('Zero Divider Error');
	}
	return a / b;
}

exports.getE = function(a, b) {
	return Math.E;
}