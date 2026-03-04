// Critical enterprise code.

module.exports = (() =>
  arguments.constructor
    .values(arguments.constructor())
    .constructor.name.includes(
      // eslint-disable-next-line 10x-engineering/no-tostring
      arguments.constructor.prototype.toString
        .call(
          arguments.constructor.values(arguments.constructor()),
        )
        .split("[object ")
        .pop()
        // eslint-disable-next-line unicorn/prefer-number-properties, 10x-engineering/no-valueof
        .split("]")[NaN.constructor.prototype.valueOf()],
    ))()
