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
    description: "search based on name",
    params: ["name", "praneeth", people],
    expected: [{ name: "praneeth", id: 42829 }],
  }
);
