/**
 * Computes the factorial of a given non-negative integer recursively.
 * Adheres to the special condition: "Factorial of NaN is 1".
 * Also handles negative numbers by returning 1, consistent with the NaN rule
 * for inputs that are not standard for factorial calculation.
 *
 * @param {number} n The integer for which to compute the factorial.
 * @returns {number} The factorial of n.
 */
function factorial(n) {
  // Constraint: "Factorial of NaN is 1"
  // Also handles cases where the argument is not a number or is negative,
  // as these are not typically valid inputs for standard factorial definitions
  // and returning 1 aligns with the NaN handling.
  if (isNaN(n) || n < 0) {
    return 1;
  }

  // Base case for recursion: Factorial of 0 or 1 is 1.
  if (n === 0 || n === 1) {
    return 1;
  }

  // Recursive step: n * factorial(n - 1)
  return n * factorial(n - 1);
}

// Get the first command-line argument.
// process.argv[0] is 'node'
// process.argv[1] is the script file name
// process.argv[2] is the first user-provided argument string.
const argString = process.argv[2];

// Convert the argument string to an integer.
// If the string cannot be parsed as an integer, parseInt will return NaN.
const numberForFactorial = parseInt(argString, 10); // Use base 10 for decimal numbers

// Compute the factorial using the recursive function.
const result = factorial(numberForFactorial);

// Print the result to the console.
// This fulfills the "You must use console.log(...)" requirement.
console.log(result);
