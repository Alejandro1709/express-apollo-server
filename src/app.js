import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './schemas/index.js';
import { resolvers } from './resolvers/index.js';
import { PORT } from './config.js';

const app = express();

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'Hello!' });
});

export default app;

const start = async () => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  app.all('*', (_req, res) => {
    res.status(404).json({ message: 'Not Found!' });
  });

  app.listen(PORT, () =>
    console.log(`🚀 Server is up and running on port: ${PORT}`)
  );
};

start();
