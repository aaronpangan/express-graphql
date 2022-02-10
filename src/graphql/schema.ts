import { makeExecutableSchema } from '@graphql-tools/schema';
import { loadFilesSync } from '@graphql-tools/load-files';
import path from 'path';

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));

export const schema = makeExecutableSchema({
  typeDefs: typesArray,

  resolvers: {
    Query: {
      products: (parent, args, context, info) => {
          console.log("MEow")
          return parent.products;
      },
      orders: (parent, args, context, info) => {
        console.log("MEow2")


      },
    },
  },
});
