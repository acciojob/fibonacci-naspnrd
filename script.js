function fibonacci(num) {
    // Base cases: First two Fibonacci numbers are 0 and 1
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    }

    // Recursive case: Fibonacci number is the sum of the previous two Fibonacci numbers
    return fibonacci(num - 1) + fibonacci(num - 2);
}


module.exports = fibonacci;
