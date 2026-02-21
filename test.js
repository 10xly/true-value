"use strict";

const assert = require("assert");
const trueValue = require("./true");
const standardJavaScriptFunctionThatReturnsTheGeneralBooleanValueTrue = require("./index");

describe("SMOKE", () => {
  it("true.js can be required without throwing", () => {
    assert.doesNotThrow(() => require("./true"));
  });

  it("index.js can be required without throwing", () => {
    assert.doesNotThrow(() => require("./index"));
  });

  it("true.js exports something", () => {
    assert.notStrictEqual(trueValue, undefined);
    assert.notStrictEqual(trueValue, null);
  });

  it("index.js exports something", () => {
    assert.notStrictEqual(standardJavaScriptFunctionThatReturnsTheGeneralBooleanValueTrue, undefined);
  });

  it("the exported item from index.js is a function", () => {
    assert.strictEqual(typeof standardJavaScriptFunctionThatReturnsTheGeneralBooleanValueTrue, "function");
  });

  it("calling the function does not throw", () => {
    assert.doesNotThrow(() => standardJavaScriptFunctionThatReturnsTheGeneralBooleanValueTrue());
  });
});

describe("TYPE", () => {
  it("true.js exports a boolean", () => {
    assert.strictEqual(typeof trueValue, "boolean");
  });

  it("the function return value is a boolean", () => {
    assert.strictEqual(typeof standardJavaScriptFunctionThatReturnsTheGeneralBooleanValueTrue(), "boolean");
  });

  it("true.js export is not a number", () => {
    assert.notStrictEqual(typeof trueValue, "number");
  });

  it("true.js export is not a string", () => {
    assert.notStrictEqual(typeof trueValue, "string");
  });

  it("true.js export is not an object", () => {
    assert.notStrictEqual(typeof trueValue, "object");
  });

  it("true.js export is not undefined", () => {
    assert.notStrictEqual(typeof trueValue, "undefined");
  });

  it("true.js export is not a symbol", () => {
    assert.notStrictEqual(typeof trueValue, "symbol");
  });

  it("true.js export is not a bigint", () => {
    assert.notStrictEqual(typeof trueValue, "bigint");
  });

  it("true.js export is not a function", () => {
    assert.notStrictEqual(typeof trueValue, "function");
  });
});

describe("VALUE", () => {
  it("true.js strictly equals true", () => {
    assert.strictEqual(trueValue, true);
  });

  it("function return strictly equals true", () => {
    assert.strictEqual(standardJavaScriptFunctionThatReturnsTheGeneralBooleanValueTrue(), true);
  });

  it("true.js does NOT strictly equal false", () => {
    assert.notStrictEqual(trueValue, false);
  });

  it("true.js does NOT strictly equal 1", () => {
    assert.notStrictEqual(trueValue, 1);
  });

  it('true.js does NOT strictly equal "true"', () => {
    assert.notStrictEqual(trueValue, "true");
  });

  it("true.js does NOT strictly equal 0", () => {
    assert.notStrictEqual(trueValue, 0);
  });

  it("true.js does NOT strictly equal null", () => {
    assert.notStrictEqual(trueValue, null);
  });

  it("true.js does NOT strictly equal undefined", () => {
    assert.notStrictEqual(trueValue, undefined);
  });

  it("true.js does NOT strictly equal NaN", () => {
    assert.notStrictEqual(trueValue, NaN);
  });

  it("true.js does NOT strictly equal an empty string", () => {
    assert.notStrictEqual(trueValue, "");
  });

  it("true.js does NOT strictly equal an empty array", () => {
    assert.notStrictEqual(trueValue, []);
  });

  it("true.js does NOT strictly equal an empty object", () => {
    assert.notStrictEqual(trueValue, {});
  });

  it("true.js does NOT strictly equal Infinity", () => {
    assert.notStrictEqual(trueValue, Infinity);
  });

  it("true.js does NOT strictly equal -Infinity", () => {
    assert.notStrictEqual(trueValue, -Infinity);
  });

  it("true.js does NOT strictly equal -1", () => {
    assert.notStrictEqual(trueValue, -1);
  });
});

describe("LOGIC", () => {
  it("true && true === true", () => {
    assert.strictEqual(trueValue && trueValue, true);
  });

  it("true || false === true", () => {
    assert.strictEqual(trueValue || false, true);
  });

  it("!true === false", () => {
    assert.strictEqual(!trueValue, false);
  });

  it("!!true === true", () => {
    assert.strictEqual(!!trueValue, true);
  });

  it("true && false === false", () => {
    assert.strictEqual(trueValue && false, false);
  });

  it("true || true === true", () => {
    assert.strictEqual(trueValue || true, true);
  });

  it("false || true === true", () => {
    assert.strictEqual(false || trueValue, true);
  });

  it("true XOR false === 1 (via bitwise)", () => {
    assert.strictEqual((trueValue ^ false) === 1, true);
  });

  it("true XOR true === 0 (via bitwise)", () => {
    assert.strictEqual((trueValue ^ true) === 0, true);
  });

  it("true in a ternary selects the first branch", () => {
    assert.strictEqual(trueValue ? "correct" : "incorrect", "correct");
  });

  it("true used as an if-condition enters the block", () => {
    let entered = false;
    if (trueValue) entered = true;
    assert.strictEqual(entered, true);
  });

  it("true used in while loop runs exactly once (with break)", () => {
    let count = 0;
    while (trueValue) { count++; break; }
    assert.strictEqual(count, 1);
  });

  it("Boolean(true) === true", () => {
    assert.strictEqual(Boolean(trueValue), true);
  });

  it("true in a switch statement matches case true", () => {
    let matched = false;
    switch (trueValue) {
      case true: matched = true; break;
      default:   matched = false;
    }
    assert.strictEqual(matched, true);
  });
});

describe("COERCION", () => {
  it("true + 0 === 1", () => {
    assert.strictEqual(trueValue + 0, 1);
  });

  it("true + 1 === 2", () => {
    assert.strictEqual(trueValue + 1, 2);
  });

  it('true + "" === "true"', () => {
    assert.strictEqual(trueValue + "", "true");
  });

  it('String(true) === "true"', () => {
    assert.strictEqual(String(trueValue), "true");
  });

  it("Number(true) === 1", () => {
    assert.strictEqual(Number(trueValue), 1);
  });

  it("parseInt(true) is NaN", () => {
    assert.ok(isNaN(parseInt(trueValue)));
  });

  it("true > false", () => {
    assert.ok(trueValue > false);
  });

  it("true >= true", () => {
    assert.ok(trueValue >= true);
  });

  it("true * 1 === 1", () => {
    assert.strictEqual(trueValue * 1, 1);
  });

  it("true * 0 === 0", () => {
    assert.strictEqual(trueValue * 0, 0);
  });

  it("true / 1 === 1", () => {
    assert.strictEqual(trueValue / 1, 1);
  });

  it("true - true === 0", () => {
    assert.strictEqual(trueValue - trueValue, 0);
  });

  it("[true].join() === 'true'", () => {
    assert.strictEqual([trueValue].join(), "true");
  });

  it("JSON.stringify(true) === 'true'", () => {
    assert.strictEqual(JSON.stringify(trueValue), "true");
  });

  it("JSON round-trip preserves true", () => {
    assert.strictEqual(JSON.parse(JSON.stringify(trueValue)), true);
  });
});

describe("PROTO", () => {
  it("Object(true) is a Boolean instance", () => {
    assert.ok(Object(trueValue) instanceof Boolean);
  });

  it("Boolean.prototype.valueOf.call(true) === true", () => {
    assert.strictEqual(Boolean.prototype.valueOf.call(trueValue), true);
  });

  it("Boolean.prototype.toString.call(true) === 'true'", () => {
    assert.strictEqual(Boolean.prototype.toString.call(trueValue), "true");
  });

  it("Object.is(true, true) === true", () => {
    assert.ok(Object.is(trueValue, true));
  });

  it("Object.is(true, 1) === false", () => {
    assert.ok(!Object.is(trueValue, 1));
  });

  it("Object.is(true, false) === false", () => {
    assert.ok(!Object.is(trueValue, false));
  });

  it("boxed true has no own enumerable properties", () => {
    assert.deepStrictEqual(Object.keys(Object(trueValue)), []);
  });
});

describe("ARRAY", () => {
  it("[true].includes(true)", () => {
    assert.ok([trueValue].includes(true));
  });

  it("[true].indexOf(true) === 0", () => {
    assert.strictEqual([trueValue].indexOf(true), 0);
  });

  it("[true].find(x => x === true) === true", () => {
    assert.strictEqual([trueValue].find((x) => x === true), true);
  });

  it("[true].every(x => x === true)", () => {
    assert.ok([trueValue].every((x) => x === true));
  });

  it("[true].some(x => x === true)", () => {
    assert.ok([trueValue].some((x) => x === true));
  });

  it("[true].filter(x => x === true) has length 1", () => {
    assert.strictEqual([trueValue].filter((x) => x === true).length, 1);
  });

  it("[true].map(x => !x) deep equals [false]", () => {
    assert.deepStrictEqual([trueValue].map((x) => !x), [false]);
  });

  it("[true].reduce((a, b) => a && b, true) === true", () => {
    assert.strictEqual([trueValue].reduce((a, b) => a && b, true), true);
  });

  it("Array.from([true])[0] === true", () => {
    assert.strictEqual(Array.from([trueValue])[0], true);
  });
});

describe("SET", () => {
  it("a Set containing true has size 1", () => {
    assert.strictEqual(new Set([trueValue]).size, 1);
  });

  it("a Set containing true has(true)", () => {
    assert.ok(new Set([trueValue]).has(true));
  });

  it("adding true twice to a Set keeps size 1", () => {
    const s = new Set();
    s.add(trueValue);
    s.add(trueValue);
    assert.strictEqual(s.size, 1);
  });
});

describe("MAP", () => {
  it("a Map can use true as a key", () => {
    const m = new Map();
    m.set(trueValue, "yes");
    assert.strictEqual(m.get(true), "yes");
  });
});

describe("FUNCTION", () => {
  it("has the correct name", () => {
    assert.strictEqual(
      standardJavaScriptFunctionThatReturnsTheGeneralBooleanValueTrue.name,
      "standardJavaScriptFunctionThatReturnsTheGeneralBooleanValueTrue"
    );
  });

  it("has length 0", () => {
    assert.strictEqual(standardJavaScriptFunctionThatReturnsTheGeneralBooleanValueTrue.length, 0);
  });

  it("calling with no arguments returns true", () => {
    assert.strictEqual(standardJavaScriptFunctionThatReturnsTheGeneralBooleanValueTrue(), true);
  });

  it("calling with one argument still returns true", () => {
    assert.strictEqual(standardJavaScriptFunctionThatReturnsTheGeneralBooleanValueTrue(false), true);
  });

  it("calling with many falsy arguments still returns true", () => {
    assert.strictEqual(
      standardJavaScriptFunctionThatReturnsTheGeneralBooleanValueTrue(false, null, undefined, NaN, 0, "", [], {}, -1),
      true
    );
  });

  it("calling 1000 times always returns true", () => {
    const results = Array.from({ length: 1000 }, () => standardJavaScriptFunctionThatReturnsTheGeneralBooleanValueTrue());
    assert.ok(results.every((r) => r === true));
  });

  it("is callable via .call()", () => {
    assert.strictEqual(standardJavaScriptFunctionThatReturnsTheGeneralBooleanValueTrue.call(null), true);
  });

  it("is callable via .apply()", () => {
    assert.strictEqual(standardJavaScriptFunctionThatReturnsTheGeneralBooleanValueTrue.apply(null, []), true);
  });

  it("is callable via .bind()()", () => {
    assert.strictEqual(standardJavaScriptFunctionThatReturnsTheGeneralBooleanValueTrue.bind(null)(), true);
  });

  it("works wrapped in a closure", () => {
    const getValue = () => standardJavaScriptFunctionThatReturnsTheGeneralBooleanValueTrue();
    assert.strictEqual(getValue(), true);
  });

  it("works when passed to Array.prototype.map", () => {
    assert.deepStrictEqual(
      [1, 2, 3].map(() => standardJavaScriptFunctionThatReturnsTheGeneralBooleanValueTrue()),
      [true, true, true]
    );
  });

  it("works when passed to Array.prototype.filter", () => {
    assert.deepStrictEqual(
      [1, 2, 3].filter(() => standardJavaScriptFunctionThatReturnsTheGeneralBooleanValueTrue()),
      [1, 2, 3]
    );
  });

  it("works inside a Promise", () => {
    return Promise.resolve().then(() => {
      assert.strictEqual(standardJavaScriptFunctionThatReturnsTheGeneralBooleanValueTrue(), true);
    });
  });

  it("works inside async/await", async () => {
    const result = await Promise.resolve(standardJavaScriptFunctionThatReturnsTheGeneralBooleanValueTrue());
    assert.strictEqual(result, true);
  });
});

describe("MODULE", () => {
  it("requiring true.js twice returns same value", () => {
    assert.strictEqual(require("./true"), require("./true"));
  });

  it("requiring index.js twice returns same function reference", () => {
    assert.strictEqual(require("./index"), require("./index"));
  });

  it("true cannot be corrupted by property assignment", () => {
    const original = trueValue;
    try { trueValue.hacked = "no"; } catch (e) {}
    assert.strictEqual(require("./true"), original);
  });
});

describe("COMPETITOR", () => {
  it("our true equals Boolean(1)", () => {
    assert.strictEqual(trueValue, Boolean(1));
  });

  it("our true equals !!1", () => {
    assert.strictEqual(trueValue, !!1);
  });

  it("our true equals !!{}", () => {
    assert.strictEqual(trueValue, !!{});
  });

  it('our true equals !!"nonempty"', () => {
    assert.strictEqual(trueValue, !!"nonempty");
  });

  it("our true equals (1 === 1)", () => {
    assert.strictEqual(trueValue, 1 === 1);
  });

  it("our true equals Array.isArray([])", () => {
    assert.strictEqual(trueValue, Array.isArray([]));
  });

  it("our true equals Number.isFinite(0)", () => {
    assert.strictEqual(trueValue, Number.isFinite(0));
  });
});

describe("EDGE", () => {
  it("true survives JSON round-trip through a nested object", () => {
    const parsed = JSON.parse(JSON.stringify({ value: trueValue, nested: { deeper: { truth: trueValue } } }));
    assert.strictEqual(parsed.value, true);
    assert.strictEqual(parsed.nested.deeper.truth, true);
  });

  it("true can be stored and retrieved from a plain object", () => {
    const store = {};
    store.truth = trueValue;
    assert.strictEqual(store.truth, true);
  });

  it("true survives Object.assign", () => {
    const target = {};
    Object.assign(target, { truth: trueValue });
    assert.strictEqual(target.truth, true);
  });

  it("true survives spread operator", () => {
    assert.strictEqual({ ...{ truth: trueValue } }.truth, true);
  });

  it("true survives structuredClone", () => {
    assert.strictEqual(structuredClone({ truth: trueValue }).truth, true);
  });

  it("true is truthy", () => {
    assert.ok(trueValue);
  });

  it("!true is falsy", () => {
    assert.ok(!(!trueValue));
  });

  it("true.toString() returns 'true'", () => {
    assert.strictEqual(trueValue.toString(), "true");
  });

  it("true.valueOf() returns true", () => {
    assert.strictEqual(trueValue.valueOf(), true);
  });

  it("typeof true is 'boolean'", () => {
    assert.strictEqual(typeof trueValue, "boolean");
  });

  it("true as array index accesses index 1, not 0", () => {
    assert.strictEqual([42][trueValue], undefined);
  });

  it("true used as object key becomes the string 'true'", () => {
    const obj = {};
    obj[trueValue] = "it works";
    assert.strictEqual(obj["true"], "it works");
  });

  it("true ?? false returns true", () => {
    assert.strictEqual(trueValue ?? false, true);
  });

  it("optional chaining with true works fine", () => {
    const obj = { getTrue: () => trueValue };
    assert.strictEqual(obj?.getTrue?.(), true);
  });

  it("true survives 100 identity functions", () => {
    let value = trueValue;
    for (let i = 0; i < 100; i++) value = ((x) => x)(value);
    assert.strictEqual(value, true);
  });

  it("true survives 500 double-negations", () => {
    let value = trueValue;
    for (let i = 0; i < 500; i++) { value = !value; value = !value; }
    assert.strictEqual(value, true);
  });

  it("true works inside a generator function", () => {
    function* gen() { yield standardJavaScriptFunctionThatReturnsTheGeneralBooleanValueTrue(); }
    assert.strictEqual(gen().next().value, true);
  });

  it("true works inside Symbol.iterator protocol", () => {
    const iterable = {
      [Symbol.iterator]() {
        let done = false;
        return {
          next() {
            if (!done) { done = true; return { value: standardJavaScriptFunctionThatReturnsTheGeneralBooleanValueTrue(), done: false }; }
            return { value: undefined, done: true };
          },
        };
      },
    };
    const [first] = iterable;
    assert.strictEqual(first, true);
  });
});

describe("SECURITY", () => {
  it("monkey-patching Boolean does not corrupt true", () => {
    const OriginalBoolean = Boolean;
    try {
      global.Boolean = () => false;
      assert.strictEqual(standardJavaScriptFunctionThatReturnsTheGeneralBooleanValueTrue(), true);
    } finally {
      global.Boolean = OriginalBoolean;
    }
  });

  it("cached primitive cannot be retroactively tampered with", () => {
    assert.strictEqual(trueValue, true);
  });

  it("prototype pollution does not affect the primitive true", () => {
    try {
      Object.prototype.truth = false;
      assert.strictEqual(standardJavaScriptFunctionThatReturnsTheGeneralBooleanValueTrue(), true);
    } finally {
      delete Object.prototype.truth;
    }
  });
});

describe("PERF", () => {
  it("calling the function 1,000,000 times completes in under 2 seconds", () => {
    const start = Date.now();
    for (let i = 0; i < 1_000_000; i++) standardJavaScriptFunctionThatReturnsTheGeneralBooleanValueTrue();
    assert.ok(Date.now() - start < 2000);
  });

  it("accessing true.js export 10,000,000 times completes in under 1 second", () => {
    let acc = true;
    const start = Date.now();
    for (let i = 0; i < 10_000_000; i++) acc = acc && trueValue;
    assert.strictEqual(acc, true);
    assert.ok(Date.now() - start < 1000);
  });
});

describe("REGRESSION", () => {
  it("true.js does not return false", () => {
    assert.notStrictEqual(trueValue, false);
  });

  it("true.js does not return 0", () => {
    assert.notStrictEqual(trueValue, 0);
  });

  it("true.js does not return null", () => {
    assert.notStrictEqual(trueValue, null);
  });

  it("true.js does not return undefined", () => {
    assert.notStrictEqual(trueValue, undefined);
  });

  it('true.js does not return the string "false"', () => {
    assert.notStrictEqual(trueValue, "false");
  });

  it("the exported function is truthy", () => {
    assert.ok(standardJavaScriptFunctionThatReturnsTheGeneralBooleanValueTrue);
  });
});

describe("INTEGRATION", () => {
  it("end-to-end truth pipeline", () => {
    const foundation = require("./true");
    assert.strictEqual(foundation, true);

    const fn = require("./index");
    assert.strictEqual(typeof fn, "function");

    const output = fn();
    assert.strictEqual(output, true);

    assert.strictEqual(foundation, output);

    assert.strictEqual(output ? "truth works" : "something is very wrong", "truth works");
  });
});