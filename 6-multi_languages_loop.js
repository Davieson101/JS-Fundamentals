// Define an array containing the three required messages.
// Using 'const' adheres to the "You are not allowed to use var" rule.
const messages = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

// Initialize an empty string to build our multi-line output.
// Using 'let' is necessary here as the string will be modified in the loop.
let outputString = "";

// Initialize a counter for the loop.
let i = 0;

// Use a while loop to iterate through the messages array.
// This fulfills the "You must use a loop" requirement.
while (i < messages.length) {
  // Append the current message to the output string.
  outputString += messages[i];

  // Append a newline character after each message.
  // Since we are not allowed to use if/else, this will add an extra newline
  // at the very end of the string, which we will remove later.
  outputString += '\n';

  // Increment the counter to move to the next message.
  i++;
}

// Print the entire constructed string using a single console.log call.
// The .slice(0, -1) method is used to remove the trailing newline character
// that was added after the last message, as we could not use an if/else
// statement within the loop to prevent it. This ensures exactly three lines are printed.
console.log(outputString.slice(0, -1));
