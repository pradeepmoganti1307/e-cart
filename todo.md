## IMPLEMENT THE FOLLOWING

1. search command

```js
search[key][value];
```

returns the details of product that matched with key:value, In this case key is productID, name, category and values are 1..., laptops.., electronic..

```js
search name "smartphone"
```

will return

```js
{
  productID: 2,
  name: "smartphone",
  price: 599.99,
  stock: 150,
  category: "electronics",
  rating: 4.3,
}
```
