import { Request, Response, NextFunction } from "express";
import { Business, Product } from "../interfaces/entyties";
import BusinessServices from "../services/business.services";

export default class BusinessControllers extends BusinessServices {
	async getAll(_: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const result = await super.getBusinesses();
			res.send({ status: "success", result });
		} catch (error) {
			next(error);
		}
	}

	async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const idBusiness: string = req.params.bid;
			const result = await super.getBusinessById(idBusiness);
			res.send({ status: "success", result });
		} catch (error) {
			next(error);
		}
	}

	async create(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const business: Business = req.body;
			const result = await super.createBusiness(business);
			res.send({ status: "success", result });
		} catch (error) {
			next(error);
		}
	}

	async addProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const idBusiness: string = req.params.bid;
			const producto: Product = req.body;
			const result = await super.addProductToBusiness(idBusiness, producto);
			res.send({ status: "success", result });
		} catch (error) {
			next(error);
		}
	}
}
