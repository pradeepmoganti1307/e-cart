import { products } from "./data.js";
import { sort, search, trim, setType } from "./operations.js";

const main = () => {
  const query = prompt("e-cart:");
  const [command, key, arg] = trim(query);
  const value = setType(arg);

  switch (command) {
    case "search":
      return search(key, value, products);
    case "sort":
      return sort(key, value, products);
  }
};
console.table(main());
