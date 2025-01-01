export const isValidKey = (key, products) => key in products[0];

export const search = (key, value, records) => [
  records.find((data) => data[key] === value),
];

export const sort = (key, order, records) => {
  const asc = (object1, object2) => object1[key] - object2[key];
  const dsc = (object1, object2) => object2[key] - object1[key];

  return records.toSorted(order === 1 ? dsc : asc);
};

export const absType = (value) =>
  isNaN(Number(value)) ? value : Number(value);

export const trim = (string) =>
  string.split(" ").filter((element) => element !== "");

export const list = (key, record) => {
  return key ? record.map((record) => record[key]) : record;
};

const restorePath = (path) => {
  path.promptString = "ecart:";
  path.currentHandlingData = path.parentData;
};

export const cd = (key, path) => {
  if (key === "..") return restorePath(path);
  if (Array.isArray(path.currentHandlingData)) return "------not a directory!";
  if (key === ".") return Object.keys(path.currentHandlingData);
  if (!(key in path.currentHandlingData)) return "-------not a valid path!";

  path.promptString = "ecart-" + key + ":";
  path.currentHandlingData = path.currentHandlingData[key];
};
