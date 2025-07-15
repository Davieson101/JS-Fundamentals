// Define the addition function as required.
// It takes two parameters, 'a' and 'b', and returns their sum.
// Using 'const' for the function declaration adheres to the "You are not allowed to use var" rule.
function add(a, b) {
  return a + b;
}

// Get the first and second command-line arguments.
// process.argv[0] is 'node'
// process.argv[1] is the script file name
// process.argv[2] is the first user-provided argument.
// process.argv[3] is the second user-provided argument.
const firstArgString = process.argv[2];
const secondArgString = process.argv[3];

// Convert the string arguments to integers.
// parseInt() is used to ensure they are treated as numbers for addition.
// The '10' specifies base-10 (decimal) conversion.
const num1 = parseInt(firstArgString, 10);
const num2 = parseInt(secondArgString, 10);

// Call the add function with the converted integers and print the result.
// This fulfills the "You must use console.log(...)" requirement.
// Note: This script assumes valid integer inputs as per the prompt.
// If error handling for non-integer or missing arguments is needed,
// additional checks (like isNaN or undefined checks) would be added here.
console.log(add(num1, num2));
