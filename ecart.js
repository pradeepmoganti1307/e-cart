import { products } from "./data.js";
import { sort, search, trim, absType, list } from "./operations.js";

const main = () => {
  const query = prompt("e-cart:");
  const [command, key, valueAsString] = trim(query);
  const value = absType(valueAsString);

  switch (command) {
    case "search":
      return search(key, value, products);
    case "sort":
      return sort(key, value, products);
    case "list":
      return list(value, products);
  }
};
console.table(main());
