import products from '../data/products.js';

export const resolvers = {
  Query: {
    products: () => products,
    product: (_, args) => {
      return products.find((prod) => prod.id === Number(args.id));
    },
  },
  Mutation: {
    addProduct: (_, args) => {
      const { title, imageUrl, price, quantity } = args;

      const newProduct = {
        id: products.length + 1,
        title,
        imageUrl,
        price,
        quantity,
      };

      products.push(newProduct);

      return newProduct;
    },
    updateProduct: (_, args) => {
      const { id, title, imageUrl, price, quantity } = args;

      const foundProduct = products.find((prod) => prod.id === Number(id));

      foundProduct.title = title;
      foundProduct.imageUrl = imageUrl;
      foundProduct.price = price;
      foundProduct.quantity = quantity;

      const idx = products.indexOf(foundProduct);

      products.splice(idx, 1, foundProduct);

      return foundProduct;
    },
    removeProduct: (_, args) => {
      return products.filter((prod) => prod.id !== Number(args.id));
    },
  },
};
