// Get the command-line arguments.
// process.argv[0] is 'node'
// process.argv[1] is the script file name
// Subsequent elements are the actual arguments passed by the user.
const args = process.argv.slice(2); // Slice to get only the user-provided arguments

if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}