import { products } from "./products.js";
import { sort, search } from "./operations.js";

const main = () => {
  const query = prompt("e-cart:");
  const [command, key, value] = query.split(" ");

  switch (command) {
    case "search":
      return search(key, value, products);
    case "sort":
      return sort(key, Number(value), products);
  }
};

console.table(main());
