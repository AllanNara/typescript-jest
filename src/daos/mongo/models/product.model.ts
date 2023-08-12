import { Schema, model } from "mongoose";
import { ProductModel } from "../../../interfaces/entyties";

const collection = "products";

export const productSchema = new Schema<ProductModel>({
	product: { type: String, required: true },
	price: { type: Number, required: true },
});

const productModel = model<ProductModel>(collection, productSchema);

export default productModel;
