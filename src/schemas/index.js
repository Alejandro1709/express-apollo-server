import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  Query: {
    message: String
  }
`;
