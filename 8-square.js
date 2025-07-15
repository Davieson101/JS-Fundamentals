// Get the first command-line argument, which represents the size of the square.
// process.argv[0] is 'node'
// process.argv[1] is the script file name
// process.argv[2] is the first user-provided argument.
const sizeString = process.argv[2];

// Attempt to convert the argument to an integer.
// parseInt will return NaN (Not-a-Number) if the string cannot be parsed as an integer.
const size = parseInt(sizeString, 10); // The '10' specifies base-10 (decimal)

// Check if the argument was not provided or if it's not a valid number.
if (sizeString === undefined || isNaN(size)) {
  console.log("Missing size");
} else {
  // If the size is valid (a number), proceed to print the square.
  // We need to ensure the size is non-negative for the loop to behave as expected.
  // A square of size 0 or less will result in no output, which is correct.

  // First, create a single row of 'X' characters.
  // The String.prototype.repeat() method is efficient for this.
  const rowOfXs = 'X'.repeat(size);

  // Use a loop to print the row 'size' times.
  // This fulfills the "You must use a loop" requirement.
  for (let i = 0; i < size; i++) {
    console.log(rowOfXs);
  }
}
