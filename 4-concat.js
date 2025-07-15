// Get the command-line arguments.
// process.argv[0] is 'node'
// process.argv[1] is the script file name
// process.argv[2] would be the first user-provided argument.
// process.argv[3] would be the second user-provided argument.

const firstArg = process.argv[2];  // Store the potential first argument
const secondArg = process.argv[3]; // Store the potential second argument

// Check if both arguments are provided (i.e., not undefined)
if (firstArg !== undefined && secondArg !== undefined) {
  // If both exist, print them in the specified format
  console.log(`${firstArg} is ${secondArg}`);
} else {
  // If not enough arguments are provided, inform the user
  console.log("Please provide exactly two arguments.");
  // You could also provide more specific messages like:
  // if (firstArg === undefined) {
  //   console.log("No arguments provided.");
  // } else {
  //   console.log("Only one argument provided. Two are required.");
  // }
}
