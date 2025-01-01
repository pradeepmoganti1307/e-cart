import { data } from "./data.js";
import { sort, search, trim, absType, list, cd } from "./operations.js";

const runCommand = (command, key, value, path) => {
  switch (command) {
    case "cd":
      return cd(key, path);
    case "search":
      return search(key, value, path.currentHandlingData);
    case "sort":
      return sort(key, value, path.currentHandlingData);
    case "list":
      return list(value, path.currentHandlingData);
  }
};

const e_cart = (path) => {
  const query = prompt(path.promptString);
  const [command, key, value] = trim(query);

  return runCommand(command, key, absType(value), path);
};

const main = () => {
  const path = {
    promptString: "e-cart:",
    currentHandlingData: data,
    parentData: data,
  };

  while (true) {
    const result = e_cart(path);
    console.table(result);
  }
};

main();
