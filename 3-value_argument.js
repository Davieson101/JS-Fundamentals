// Get the command-line arguments.
// process.argv[0] is 'node'
// process.argv[1] is the script file name
// process.argv[2] would be the first user-provided argument.

// We directly check process.argv[2] to see if a first argument exists.
// If no argument is passed by the user, process.argv[2] will be undefined.
const firstArgument = process.argv[2];

if (firstArgument === undefined) {
  // If firstArgument is undefined, it means no user-provided argument was given.
  console.log("No argument");
} else {
  // Otherwise, a first argument exists, so we print it.
  console.log(firstArgument);
}
