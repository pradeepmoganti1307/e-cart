export const search = (key, value, records) => {
  return [records.find((data) => data[key] === value)];
};

export const sort = (key, order, products) => {
  const asc = (object1, object2) => object1[key] - object2[key];
  const dsc = (object1, object2) => object2[key] - object1[key];

  return products.toSorted(order === 1 ? dsc : asc);
};
