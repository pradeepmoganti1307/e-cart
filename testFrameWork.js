const isEqual = (a, b) => a === b;

const areObjectsEqual = (a, b) => {
  const _a = Object.entries(a).sort();
  const _b = Object.entries(b).sort();
  return areEqual(_a, _b);
};

const areEqual = (a, b) => {
  if (!Array.isArray(a) && typeof a === "object") return areObjectsEqual(a, b);
  if (!Array.isArray(a)) return isEqual(a, b);
  if (a.length !== b.length) return false;

  return a.every((value, index) => areEqual(value, b[index]));
};

const sortResultsByStatus = (results) => {
  const sorted = [];

  results.map((result) =>
    isEqual(result.status, "✅") ? sorted.push(result) : sorted.unshift(result)
  );

  console.table(sorted);
};

export const testSuite = (Fn, ...testCases) => {
  const results = testCases.map((testCase) => {
    const { description, params, expected } = { ...testCase };
    const actual = Fn(...params);
    const status = areEqual(actual, expected) ? "✅" : "❌";

    return { status, description, params, expected, actual };
  });

  return sortResultsByStatus(results);
};
