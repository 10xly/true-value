const generatorFn = require("co-noop")
const call = require("node-call.next")

module.exports = (function returnTrue() {
  return call.next(generatorFn()).done
})()
