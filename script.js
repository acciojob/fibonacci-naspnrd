function fibonacci(num) {
	// Base Case
  if (num === 0 || num === 1) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
	
}


module.exports = fibonacci;
