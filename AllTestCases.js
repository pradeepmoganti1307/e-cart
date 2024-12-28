import { testSuite } from "./testFrameWork.js";
import { search, sort, trim } from "./operations.js";
import { people } from "./data.js";

testSuite(
  search,
  {
    description: "search based on name",
    params: ["name", "pradeep", people],
    expected: [{ name: "pradeep", id: 42880 }],
  },
  {
    description: "Invalid search returns undefined ",
    params: ["age", 20, people],
    expected: [undefined],
  },
  {
    description: "search based on id",
    params: ["id", 42880, people],
    expected: [{ name: "pradeep", id: 42880 }],
  }
);
