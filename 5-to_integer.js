// Get the first command-line argument.
// process.argv[0] is 'node'
// process.argv[1] is the script file name
// process.argv[2] is the first user-provided argument.
const firstArgument = process.argv[2];

// Check if an argument was even provided.
if (firstArgument === undefined) {
  console.log("No argument provided. Please provide a number.");
} else {
  // Attempt to convert the argument to an integer.
  // parseInt will return NaN (Not-a-Number) if the string cannot be parsed as an integer.
  const convertedNumber = parseInt(firstArgument, 10); // The '10' specifies base-10 (decimal)

  // Check if the result of parseInt is NaN.
  // isNaN() is a global function that checks if a value is Not-a-Number.
  if (isNaN(convertedNumber)) {
    console.log("Not a number");
  } else {
    // If it's a valid number, print it in the specified format.
    console.log(`My number: ${convertedNumber}`);
  }
}
