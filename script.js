function fibonacci(num) {
	// Base case
	if(num === 0 || num === 1)
		return num;

	// recursive case
	return fibonacci(num - 1) + fibonacci(num - 2);
}


module.exports = fibonacci;
