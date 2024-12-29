const isEqual = (a, b) => a === b;
const isObject = (a) => !Array.isArray(a) && typeof a === "object";

const areObjectsEqual = (a, b) =>
  areEqual(Object.entries(a).sort(), Object.entries(b).sort());

const areEqual = (a, b) => {
  if (isObject(a)) return areObjectsEqual(a, b);
  if (!Array.isArray(a)) return isEqual(a, b);
  if (a.length !== b.length) return false;

  return a.every((value, index) => areEqual(value, b[index]));
};

const display = function (object) {
  console.log(object.status, object.description);
};

const sortResultsByStatus = (results) => {
  const sorted = [];

  results.map((result) =>
    isEqual(result.status, "✅") ? sorted.push(result) : sorted.unshift(result)
  );

  sorted.map((result) => display(result));
  console.log();
};

export const testSuite = (Fn, ...testCases) => {
  const results = testCases.map((testCase) => {
    const { description, params, expected } = { ...testCase };
    const actual = Fn(...params);
    const status = areEqual(actual, expected) ? "✅" : "❌";

    return { status, description, params, expected, actual };
  });

  console.log("tests are on:", Fn);
  return sortResultsByStatus(results);
};
