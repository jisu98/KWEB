const calc = {};

calc.add = function(a, b){
	return a + b;
}

calc.sub = function(a, b) {
	return a - b;
}

calc.mul = function(a, b){
	return a * b;
}

calc.div = function(a, b){
	if(b == 0){
		return new Error('Zero Divider Error');
	}
	return a / b;
}

calc.getE = function() {
	return amth.E;
}

calc.mod = function(a, b){
	return a % b;
}

module.exports = calc;