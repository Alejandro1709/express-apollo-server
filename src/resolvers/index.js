import Product from '../models/Product.js';

export const resolvers = {
  Query: {
    products: async () => {
      try {
        const products = await Product.find();
        return products;
      } catch (error) {
        console.log(error);
      }
    },
    product: async (_, args) => {
      try {
        const product = await Product.findById(args.id);
        return product;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    addProduct: async (_, args) => {
      const { title, imageUrl, price, quantity } = args;

      try {
        const newProduct = new Product({
          title,
          imageUrl,
          price,
          quantity,
        });

        await newProduct.save();
      } catch (error) {
        console.log(error);
      }

      return newProduct;
    },
    updateProduct: async (_, args) => {
      const { id, title, imageUrl, price, quantity } = args;

      try {
        const product = await Product.findByIdAndUpdate(
          id,
          { $set: { title, imageUrl, price, quantity } },
          { new: true }
        );

        return product;
      } catch (error) {
        console.log(error);
      }
    },
    removeProduct: async (_, args) => {
      try {
        await Product.findByIdAndDelete(args.id);
        return 'Product removed!';
      } catch (error) {
        console.log(error);
      }
    },
  },
};
