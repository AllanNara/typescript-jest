import { Business, BusinessModel } from "../../interfaces/entyties";
import { UpdateWriteOpResult } from "mongoose";
import businessModel from "./models/business.model";
import CustomError from "../../utils/customError";
import IDAO from "../../interfaces/daos";

export default class BusinessDAO implements IDAO<BusinessModel, Business> {
	public async get() {
		try {
			const business: Array<BusinessModel> = await businessModel.find();
			return business;
		} catch (error) {
			console.log(error);
			throw new CustomError();
		}
	}

	public async getById(idBusiness: string) {
		try {
			const business: BusinessModel | null = await businessModel.findById(idBusiness);
			return business;
		} catch (error) {
			console.log(error);
			throw new CustomError();
		}
	}

	public async create(business: Business) {
		try {
			const newBusiness: BusinessModel = await businessModel.create(business);
			return newBusiness;
		} catch (error) {
			console.log(error);
			throw new CustomError();
		}
	}

	public async update(idBusiness: string, business: Business) {
		try {
			const result: UpdateWriteOpResult = await businessModel.updateOne(
				{ _id: idBusiness },
				business
			);
			return result;
		} catch (error) {
			console.log(error);
			throw new CustomError();
		}
	}
}
