import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  imageUrl: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    min: 1,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
});

export default model('Product', productSchema);
