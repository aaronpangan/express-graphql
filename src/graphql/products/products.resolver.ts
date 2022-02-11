import {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
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

  Mutation: {
    addNewProduct: (_, args) => {
      return addNewProduct(args.id, args.description, args.price);
    },
  },
};
