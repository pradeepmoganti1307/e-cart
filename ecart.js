import { products } from "./data.js";
import { sort, search, trim, absType, list } from "./operations.js";

const runCommand = (command, key, value, products) => {
  switch (command) {
    case "search":
      return search(key, value, products);
    case "sort":
      return sort(key, value, products);
    case "list":
      return list(value, products);
  }
};

const e_cart = () => {
  const query = prompt("e-cart:");
  const [command, key, value] = trim(query);
  if (!Object.keys(products[0]).includes(key)) return "404: invalid key!";

  return runCommand(command, key, absType(value), products);
};

const main = () => {
  while (true) {
    const result = e_cart();
    !!result[0] ? console.table(result) : console.log("404: result not found!");
  }
};

main();
