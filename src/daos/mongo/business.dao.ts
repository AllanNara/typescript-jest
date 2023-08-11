import { UpdateWriteOpResult } from "mongoose";

import { Business } from "../../interfaces/models.js";
import { IBusinessDAO } from "../../interfaces/daos.js";
import businessModel from "./models/business.model.js";

export default class BusinessDAO implements IBusinessDAO {
	getBusiness = async () => {
		try {
			const business: Array<Business> = await businessModel.find();
			return business;
		} catch (error) {
			console.log(error);
			return null;
		}
	};

	getBusinessById = async (idBusiness: string) => {
		try {
			const business: Business | null = await businessModel.findById(idBusiness);
			return business;
		} catch (error) {
			console.log(error);
			return null;
		}
	};

	saveBusiness = async (business: Business) => {
		try {
			const newBusiness: Business = await businessModel.create(business);
			return newBusiness;
		} catch (error) {
			console.log(error);
			return null;
		}
	};

	updateBusiness = async (idBusiness: string, business: Business) => {
		try {
			const result: UpdateWriteOpResult = await businessModel.updateOne(
				{ _id: idBusiness },
				business
			);
			return result;
		} catch (error) {
			console.log(error);
			return null;
		}
	};
}
