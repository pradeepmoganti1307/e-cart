import { search, sort, trim, absType } from "./operations.js";
import { fruits, mango, orange, banana } from "./data.js";
import { assertEquals } from "jsr:@std/assert";

//"testtCases for search ..."
Deno.test("search() should return data based on key", () => {
  assertEquals(search("name", "mango", fruits), [mango]),
    assertEquals(search("price", 9, fruits), [banana]);
});

Deno.test("search() should return undefined on invalid key", () => {
  assertEquals(search("stock", 20, fruits), [undefined]);
});

//testtCases for sort ...
Deno.test("sort() should return sorted list based on key in asc order", () => {
  assertEquals(sort("price", "", fruits), [banana, mango, orange]),
    assertEquals(sort("price", 0, fruits), [banana, mango, orange]);
});

Deno.test("sort should return sorted list based on key in dsc order", () => {
  assertEquals(sort("price", 1, fruits), [orange, mango, banana]);
});

//testtCases for trim ...

Deno.test("trim() should trim spaces at start, end, middle", () => {
  assertEquals(trim("   hello  good   morning  "), [
    "hello",
    "good",
    "morning",
  ]);
  assertEquals(trim("hello   good    morning"), ["hello", "good", "morning"]);
});

Deno.test(
  "trim() should not trim anything for this uniSpaced sentences",
  () => {
    assertEquals(trim("hello good morning"), ["hello", "good", "morning"]);
  }
);

//testCases for absType ...

Deno.test("absType() should return string for string", () => {
  assertEquals(absType("string"), "string");
});

Deno.test("absType() should return Number as number if it is in string", () => {
  assertEquals(absType("25"), 25);
});
