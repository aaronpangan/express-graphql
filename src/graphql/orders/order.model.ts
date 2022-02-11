const orderModel = [
  {
    date: '2005-05-05',
    subtotal: 80.22,
    items: [
      {
        product: {
          id: 'redshoe',
          description: 'Old red Shoe',
          price: 45.11,
        },
        quantity: 2,
      },
    ],
  },
];

export function getAllOrders() {
  return orderModel;
}
