// Import the secondary file in this library that exports the general boolean value true directly.
const trueValue = require("./true")

// Declare the standard JavaScript function that returns the general boolean value true.
function standardJavaScriptFunctionThatReturnsTheGeneralBooleanValueTrue() {
  // Generally return the standard boolean value true.
  return trueValue 
}

// Export the standard JavaScript function that returns the general boolean value true.
module.exports = standardJavaScriptFunctionThatReturnsTheGeneralBooleanValueTrue