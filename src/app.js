import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './schemas/index.js';
import { resolvers } from './resolvers/index.js';
import { PORT } from './config.js';
import connectDb from './db/index.js';

const app = express();

connectDb();

app.use(cors());

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'Hello!' });
});

export default app;

const start = async () => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    cache: 'bounded',
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    cors: { origin: 'http://localhost:3000' },
  });

  app.all('*', (_req, res) => {
    res.status(404).json({ message: 'Not Found!' });
  });

  app.listen(PORT, () =>
    console.log(`🚀 Server is up and running on port: ${PORT}`)
  );
};

start();
