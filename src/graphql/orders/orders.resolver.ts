import { getAllOrders } from './order.model';

module.exports = {
  Query: {
    orders: getAllOrders,
  },
};
