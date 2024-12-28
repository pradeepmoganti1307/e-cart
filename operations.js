export const search = (key, value, records) => {
  return [records.find((data) => data[key] === value)];
};
