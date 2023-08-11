import Business from "../daos/mongo/business.dao";
import { Request, Response } from "express";

const business = new Business();

export default class BusinessControllers {
	async getBusiness(req: Request, res: Response): Promise<Response> {
		const result = await business.getBusiness();
		if (!result)
			return res.status(500).send({ status: "error", error: "Something went wrong" });
		return res.send({ status: "success", result });
	}

	async getBusinessById(req: Request, res: Response): Promise<Response> {
		const result = await business.getBusinessById(req.params.id);
		if (!result)
			return res.status(404).send({ status: "error", error: "Business not found" });
		return res.send({ status: "success", result });
	}

	async createBusiness(req: Request, res: Response): Promise<Response> {
		const result = await business.saveBusiness(req.body);
		if (!result)
			return res.status(500).send({ status: "error", error: "Something went wrong" });
		return res.send({ status: "success", result });
	}

	async addProduct(req: Request, res: Response): Promise<Response> {
		const business = await business.getBusinessById(req.params.id);
		if (!business) res.status(404).send({ status: "error", error: "Business not found" });
		business.products.push(req.body);
		const result = await business.updateBusiness(req.params.id, business);
		if (!result)
			return res.status(500).send({ status: "error", error: "Something went wrong" });
		return res.send({ status: "success", result });
	}
}
