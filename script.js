function fibonacci(num) {
    // Base cases: First two Fibonacci numbers are 0 and 1
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    }

    // Initialize variables to store the two previous Fibonacci numbers
    let prevPrev = 0; // Initialize the first Fibonacci number
    let prev = 1;     // Initialize the second Fibonacci number

    // Iterate from the third Fibonacci number up to the numth Fibonacci number
    for (let i = 2; i <= num; i++) {
        // Calculate the current Fibonacci number by adding the previous two Fibonacci numbers
        let current = prevPrev + prev;

        // Update the previous two Fibonacci numbers for the next iteration
        prevPrev = prev;
        prev = current;
    }
    // Return the numth Fibonacci number
    return prev;
}


module.exports = fibonacci;
