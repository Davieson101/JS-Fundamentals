// Get the first command-line argument.
// process.argv[0] is 'node'
// process.argv[1] is the script file name
// process.argv[2] is the first user-provided argument.
const numberOfOccurrencesStr = process.argv[2];

// Initialize a variable to store the final output string.
// Using 'let' is necessary as the string will be built inside the loop.
let outputMessage = "";

// Check if an argument was provided and if it can be converted to an integer.
// We use parseInt and isNaN to validate the input.
const numOccurrences = parseInt(numberOfOccurrencesStr, 10); // Base 10 for decimal numbers

// Condition to check for invalid input (undefined argument or not a number).
// This uses one of the two allowed console.log calls.
if (numberOfOccurrencesStr === undefined || isNaN(numOccurrences)) {
  console.log("Missing number of occurrences");
} else {
  // If the input is a valid number, proceed with the loop.
  // Using a for loop to iterate 'numOccurrences' times.
  for (let i = 0; i < numOccurrences; i++) {
    // Append "C is fun" followed by a newline character to the output string.
    outputMessage += "C is fun\n";
  }
  // Print the accumulated output string.
  // This uses the second and final allowed console.log call.
  // The .slice(0, -1) is used to remove the trailing newline character
  // if numOccurrences is greater than 0, ensuring no empty last line.
  console.log(outputMessage.slice(0, -1));
}
