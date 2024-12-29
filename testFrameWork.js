const isEqual = (a, b) => a === b;

const areEqual = (a, b) => {
  if (!Array.isArray(a)) return isEqual(a, b);
  if (a.length !== b.length) return false;

  return a.every((value, index) => areEqual(value, b[index]));
};

const displayResult = (result) => {
  console.log("status:", result.status);
  console.log("description:", result.description);
  console.log("params:", result.params);
  console.log("expected:", result.expected);
  console.log("actual:", result.actual);
  console.log("= ".repeat(result.description.length));
  console.log();
};

const sortResultsByStatus = (results) => {
  const sorted = [];
  results.map((result) =>
    isEqual(result.status, "✅") ? sorted.push(result) : sorted.unshift(result)
  );

  sorted.map((result) => displayResult(result));
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
