import { products } from "./products.js";
import { search } from "./search.js";

const main = () => {
  const query = prompt("e-cart:");
  const [command, key, value] = query.split(" ");

  switch (command) {
    case "search":
      return search(key, value, products);
  }
};

main();
