import { Schema, model, models } from "mongoose";

const productSchema = new Schema(
  {
    item: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    telephone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = models.Product || model("Product", productSchema);
export default Product;
