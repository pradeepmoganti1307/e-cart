//products
export const products = [
  {
    productID: 1,
    name: "laptop",
    price: 899.99,
    stock: 50,
    category: "electronics",
    rating: 4.5,
  },
  {
    productID: 2,
    name: "smartphone",
    price: 599.99,
    stock: 150,
    category: "electronics",
    rating: 4.3,
  },
  {
    productID: 3,
    name: "wireless headphones",
    price: 129.99,
    stock: 200,
    category: "electronics",
    rating: 4.7,
  },
  {
    productID: 4,
    name: "bluetooth speaker",
    price: 49.99,
    stock: 100,
    category: "electronics",
    rating: 4.2,
  },
  {
    productID: 5,
    name: "smartwatch",
    price: 199.99,
    stock: 75,
    category: "electronics",
    rating: 4.6,
  },
  {
    productID: 6,
    name: "gaming chair",
    price: 189.99,
    stock: 30,
    category: "furniture",
    rating: 4.8,
  },
  {
    productID: 7,
    name: "led monitor",
    price: 249.99,
    stock: 40,
    category: "electronics",
    rating: 4.4,
  },
  {
    productID: 8,
    name: "desk lamp",
    price: 29.99,
    stock: 120,
    category: "furniture",
    rating: 4.1,
  },
  {
    productID: 9,
    name: "bluetooth earbuds",
    price: 59.99,
    stock: 85,
    category: "electronics",
    rating: 4.3,
  },
  {
    productID: 10,
    name: "4k tv",
    price: 499.99,
    stock: 50,
    category: "electronics",
    rating: 4.5,
  },
  {
    productID: 11,
    name: "jeans",
    price: 39.99,
    stock: 200,
    category: "clothing",
    rating: 4.2,
  },
  {
    productID: 12,
    name: "t-shirt",
    price: 19.99,
    stock: 300,
    category: "clothing",
    rating: 4.4,
  },
  {
    productID: 13,
    name: "sneakers",
    price: 79.99,
    stock: 150,
    category: "footwear",
    rating: 4.6,
  },
  {
    productID: 14,
    name: "sweater",
    price: 49.99,
    stock: 100,
    category: "clothing",
    rating: 4.5,
  },
  {
    productID: 15,
    name: "jacket",
    price: 89.99,
    stock: 75,
    category: "clothing",
    rating: 4.7,
  },
  {
    productID: 16,
    name: "running shoes",
    price: 99.99,
    stock: 120,
    category: "footwear",
    rating: 4.3,
  },
  {
    productID: 17,
    name: "backpack",
    price: 59.99,
    stock: 200,
    category: "accessories",
    rating: 4.2,
  },
  {
    productID: 18,
    name: "watch",
    price: 149.99,
    stock: 90,
    category: "accessories",
    rating: 4.6,
  },
  {
    productID: 19,
    name: "sunglasses",
    price: 29.99,
    stock: 180,
    category: "accessories",
    rating: 4.1,
  },
  {
    productID: 20,
    name: "phone case",
    price: 19.99,
    stock: 250,
    category: "accessories",
    rating: 4.0,
  },
];

//users
export const users = [
  {
    userID: "U001",
    name: "alice johnson",
    mail: "alice.johnson@example.com",
    isActive: true,
    cart: [],
  },
  {
    userID: "U002",
    name: "bob smith",
    mail: "bob.smith@example.com",
    isActive: false,
    cart: [],
  },
  {
    userID: "U003",
    name: "charlie brown",
    mail: "charlie.brown@example.com",
    isActive: true,
    cart: [],
  },
  {
    userID: "U004",
    name: "diana prince",
    mail: "diana.prince@example.com",
    isActive: true,
    cart: [],
  },
  {
    userID: "U005",
    name: "ethan hunt",
    mail: "ethan.hunt@example.com",
    isActive: false,
    cart: [],
  },
  {
    userID: "U006",
    name: "fiona gallagher",
    mail: "fiona.gallagher@example.com",
    isActive: true,
    cart: [],
  },
  {
    userID: "U007",
    name: "george bailey",
    mail: "george.bailey@example.com",
    isActive: true,
    cart: [],
  },
  {
    userID: "U008",
    name: "hannah montana",
    mail: "hannah.montana@example.com",
    isActive: true,
    cart: [],
  },
  {
    userID: "U009",
    name: "ian fleming",
    mail: "ian.fleming@example.com",
    isActive: false,
    cart: [],
  },
  {
    userID: "U010",
    name: "jessica pearson",
    mail: "jessica.pearson@example.com",
    isActive: true,
    cart: [],
  },
];

export const datas = { users: users, products: products };

//examples for testcases
export const mango = {
  name: "mango",
  price: 14,
};

export const orange = {
  name: "orange",
  price: 16,
};

export const banana = {
  name: "banana",
  price: 9,
};

export const fruits = [{ ...mango }, { ...orange }, { ...banana }];
