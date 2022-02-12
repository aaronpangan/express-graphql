import express from 'express';
import 'dotenv/config';
import { schema } from './graphql/registerSchema';
import { graphqlHTTP } from 'express-graphql';

const app = express();

app.use(
  '/graphiql',
  graphqlHTTP({
    graphiql: true,
    schema,
  }),
);

const PORT = process.env.port;

app.listen(PORT, () => {
  console.log(
    `\n🚀      GraphQL is now running on http://localhost:${PORT}/graphql`,
  );
});
