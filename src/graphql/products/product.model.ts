const products = [
  {
    id: 'redshoe',
    description: 'Red Shoe',
    price: 42.12,
  },
  {
    id: 'bluejean',
    description: 'Blue Jeans',
    price: 62.12,
  },
];

export function getAllProducts() {
  console.log('MEow');
  return products;
}

export function getProductsByPrice(min: number, max: number) {
  const filteredProducts = products.filter(
    (item) => item.price >= min && item.price <= max,
  );

  return filteredProducts;
}

export function getProductById(id: string) {
  const product = products.find((item) => item.id === id);

  return product;
}
