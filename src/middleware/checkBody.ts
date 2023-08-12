import { Request, Response, NextFunction as NextFn } from "express";
import CustomError from "../utils/customError";
import { Product } from "../interfaces/entyties";

export const checkUserFields = async (req: Request, _: Response, next: NextFn) => {
	try {
		const { username, email, role, ...rest } = req.body;
		if (Object.keys(rest).length > 0) throw new CustomError("Invalid fields", 400);
		if (username && email) {
			if (role && (role !== "admin" || role !== "business"))
				throw new CustomError("Wrong type of role");
			if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
				throw new CustomError("Invalid email");
			next();
		}
		throw new CustomError("Fields missing");
	} catch (error) {
		next(error);
	}
};

export const checkOrderFields = async (req: Request, _: Response, next: NextFn) => {
	try {
		const { user, business, products, ...rest } = req.body;
		if (Object.keys(rest).length > 0) throw new CustomError("Invalid fields", 400);
		if (user && business && products.length) next();
		throw new CustomError("Fields missing");
	} catch (error) {
		next(error);
	}
};

export const checkBusinessFields = async (req: Request, _: Response, next: NextFn) => {
	try {
		const { name, products, ...rest } = req.body;
		if (Object.keys(rest).length > 0) throw new CustomError("Invalid fields", 400);

		if (name && products.length) {
			if (!products.every(({ product, price }: Product) => product && price))
				throw new Error("Products fields invalid");
			next();
		}
		throw new CustomError("Fields missing");
	} catch (error) {
		next(error);
	}
};
