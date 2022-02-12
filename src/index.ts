import express from 'express';
import 'dotenv/config';
import { schema } from './graphql/registerSchema';

import { ApolloServer } from 'apollo-server-express';

const PORT = process.env.port;

async function startApolloServer() {
  const app = express();

  const server = new ApolloServer({ schema });

  await server.start();

  server.applyMiddleware({ app, path: '/graphiql' });
  app.listen(PORT, () => {
    console.log(
      `\n🚀      GraphQL is now running on http://localhost:${PORT}/graphiql`,
    );
  });
}

startApolloServer();
