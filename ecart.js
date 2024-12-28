import { products } from "./data.js";
import { sort, search, trim } from "./operations.js";

const main = () => {
  const query = prompt("e-cart:");
  const [command, key, value] = trim(query);

  switch (command) {
    case "search":
      return search(key, value, products);
    case "sort":
      return sort(key, Number(value), products);
  }
};
console.table(main());
