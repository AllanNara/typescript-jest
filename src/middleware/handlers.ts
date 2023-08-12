import { Request, Response, NextFunction } from "express";
import { ICustomError } from "../interfaces/customError";
import CustomError from "../utils/customError";

export const errorHandler = (
	err: ICustomError,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.error(err);
	if (err instanceof CustomError) {
		res.status(err.status_error).json({
			success: false,
			status: err.status_error,
			message: err.message,
			error: err.error,
		});
	} else {
		res.status(500).json({
			success: false,
			status_error: 500,
			message: err.message ? err.message : "",
			error: "INTERNAL_SERVER_ERROR",
		});
	}
};

export const pageNotFound = (req: Request, res: Response) => {
	res.status(404).json({
		status_error: 404,
		message: "failed",
		error: "URL_NOT_FOUND",
	});
};
