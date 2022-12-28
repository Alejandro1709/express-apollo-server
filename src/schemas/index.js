import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Product {
    id: ID
    title: String
    imageUrl: String
    price: Int
    quantity: Int
  }

  type Query {
    products: [Product]
    product(id: ID): Product
  }

  type Mutation {
    addProduct(
      title: String
      imageUrl: String
      price: Int
      quantity: Int
    ): Product

    updateProduct(
      id: ID
      title: String
      imageUrl: String
      price: Int
      quantity: Int
    ): Product

    removeProduct(id: ID): [Product]
  }
`;
