import { makeExecutableSchema } from '@graphql-tools/schema';
import { loadFilesSync } from '@graphql-tools/load-files';
import path from 'path';

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));

export const schema = makeExecutableSchema({ typeDefs: typesArray });
