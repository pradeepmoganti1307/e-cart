const isEqual = (a, b) => a === b;
const isArray = (a) => Array.isArray(a);
const isObject = (a) => !isArray(a) && typeof a === "object";
const areEqualSize = (a, b) => a.length === b.length;
const sortEntriesOf = (a) => Object.entries(a).sort();
const areObjectsEqual = (a, b) => areEqual(sortEntriesOf(a), sortEntriesOf(b));

const areEqual = (a, b) => {
  if (isObject(a)) return areObjectsEqual(a, b);
  if (!isArray(a)) return isEqual(a, b);
  if (!areEqualSize(a, b)) return false;

  return a.every((value, index) => areEqual(value, b[index]));
};

const display = (results, Fn) => {
  console.log("tests are on:", Fn);
  //results.actual, results.expected
  results.map((result) => console.log(result.status, result.description));
  console.log();
};

export const testSuite = (Fn, ...testCases) => {
  const results = testCases.map((testCase) => {
    const { description, params, expected } = { ...testCase };
    const actual = Fn(...params);
    const status = areEqual(actual, expected) ? "✅" : "❌";

    return { status, description, params, expected, actual };
  });

  display(results, Fn);
};
