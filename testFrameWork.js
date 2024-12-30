const isEqual = (a, b) => a === b;
const isArray = (a) => Array.isArray(a);
const isObject = (o) => !isArray(o) && typeof o === "object";
const areEqualSize = (a1, a2) => a1.length === a2.length;
const keys = (o) => Object.keys(o);
const areObjectsEqual = (o1, o2) => {
  if (!areEqualSize(keys(o1), keys(o2))) return false;

  return keys(o1).every((key) => key in o2 && areEqual(o1[key], o2[key]));
};

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
