import { testSuite } from "./testFrameWork.js";
import { search, sort, trim } from "./operations.js";
import { people, pradeep, surendra } from "./data.js";

testSuite(
  search,
  {
    description: "search based on name",
    params: ["name", "pradeep", people],
    expected: [pradeep],
  },
  {
    description: "Invalid search returns undefined ",
    params: ["age", 20, people],
    expected: [undefined],
  },
  {
    description: "search based on id",
    params: ["id", 42803, people],
    expected: [surendra],
  }
);

testSuite(
  sort,
  {
    description: "search based on name",
    params: ["name", "pradeep", people],
    expected: [pradeep],
  },
  {
    description: "Invalid search returns undefined ",
    params: ["age", 20, people],
    expected: [undefined],
  },
  {
    description: "search based on id",
    params: ["id", 42803, people],
    expected: [surendra],
  }
);
