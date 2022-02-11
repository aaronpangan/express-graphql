import {
  getAllProducts,
  getProductsByPrice,
  getProductById,
} from './product.model';

module.exports = {
  Query: {
    products: getAllProducts,
    productsByPrice: (_, args) => {
      return getProductsByPrice(args.minPrice, args.maxPrice);
    },
    productById: (_, args) => {
      return getProductById(args.id);
    },
  },
};
