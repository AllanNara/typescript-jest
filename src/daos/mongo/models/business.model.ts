import { Schema, model, Model } from "mongoose";
import { Business } from "../../../interfaces/models";

const collection = "business";

export const businessSchema = new Schema<Business, Model<Business>>({
	name: { type: String, required: true },
	products: [],
});

const businessModel = model<Business, Model<Business>>(collection, businessSchema);

export default businessModel;
