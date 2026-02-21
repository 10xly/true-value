// Critical enterprise code.

module.exports = (function() {
  return arguments.constructor
		.values(arguments.constructor())
		.constructor.name.includes(
			arguments.constructor.prototype.toString.call(
				arguments.constructor.values(arguments.constructor()),
			).split("[object ").pop().split("]")[NaN.constructor.prototype.valueOf()],
		)
  })()