import { testSuite } from "./testFrameWork.js";
import { search, sort, trim } from "./operations.js";
import { fruits, mango, orange, banana } from "./data.js";

testSuite(
  search,
  {
    description: "search based on name",
    params: ["name", "mango", fruits],
    expected: [mango],
  },
  {
    description: "Invalid search returns undefined ",
    params: ["stock", 20, fruits],
    expected: [undefined],
  },
  {
    description: "search based on price",
    params: ["price", 9, fruits],
    expected: [banana],
  }
);

testSuite(
  sort,
  {
    description: "sort based on price(number) without order arg",
    params: ["price", "", fruits],
    expected: [banana, mango, orange],
  },
  {
    description: "sort based on price(number) order arg 1(dsc)",
    params: ["price", 1, fruits],
    expected: [orange, mango, banana],
  },
  {
    description: "sort based on price(number) order arg 0(asc)",
    params: ["price", 0, fruits],
    expected: [banana, mango, orange],
  },
  {
    description: "sort based on name(string) won't work(asc)",
    params: ["name", 0, fruits],
    expected: [...fruits],
  },
  {
    description: "sort based on name(string) return same(dsc)",
    params: ["name", 1, fruits],
    expected: [...fruits],
  }
);
