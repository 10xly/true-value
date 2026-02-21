# true-value

Node.js module published on NPM that exports and provides a standard JavaScript function that returns the general boolean value true.

## Installation
Using NPM:
```bash
npm install true-value
```
Using Yarn:
```bash
yarn add true-value
```
Using PNPM:
```bash
pnpm add true-value
```

## Usage
Import with CommonJS:
```js
const trueValue = require("true-value")
```
Or you can use ESM:
```js
import * as trueValue from "true-value"
```
Example:
```js
const trueValue = require("true-value")

console.log(trueValue()) // Outputs the standard boolean value true to the default terminal output stream.

const assert = require("assert-fn") // Import standard library for quality assertions.

assert(trueValue() === true) // Assert that the boolean value true is the same as trueValue().

const booleanTrue = require("true-value/true") // Import the boolean value true directly without calling a function.

assert(booleanTrue === true) // Assert that the boolean value true is the same as booleanTrue.
```

## Why?
This is useful in environments where:
- The global boolean value `true` doesn't exist ([see this issue on mde's true library](https://github.com/mde/true/issues/19)), and NPM package [true](https://github.com/mde/true) by mde uses true directly, which could be a problem
- Serious enterprise corporations need ultimate business reliability when it comes to standardized boolean values.

## Contributing
Please contribute. Please

## Tests
`true-value` has lots of enterprise-grade tests. Simply clone the repo, `npm install` and run `npm test` to run them