import express from 'express';
import 'dotenv/config';
import { schema } from './graphql/schema';
import { graphqlHTTP } from 'express-graphql';

const app = express();

const root = {
  products: [
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
  ],

  orders: [
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
  ],
};

app.use(
  '/graphiql',
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
  }),
);

const PORT = process.env.port;

app.listen(PORT, () => {
  console.log(
    `\n🚀      GraphQL is now running on http://localhost:${PORT}/graphql`,
  );
});
