const products = [
  {
    id: 'redshoe',
    description: 'Red Shoe',
    price: 42.12,
    reviews: [],
  },
  {
    id: 'bluejean',
    description: 'Blue Jeans',
    price: 62.12,
    reviews: [],
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

export function addNewProduct(id: string, description: string, price: number) {
  const newProduct = products.push({
    id,
    description,
    price,
    reviews: [],
  });
  return products[newProduct - 1];
}

export function addProductReview(id: string, rating: number, comment: string) {
  const product = getProductById(id);

  if (!product) console.log('ID Not Found');

  let reviews: any = product?.reviews;
  reviews?.push({ rating, comment });

  return reviews;
}
