import express from "express";
import config from "./config/config";
import userRouter from "./routes/user.router";
import businessRouter from "./routes/business.router";
import ordersRouter from "./routes/orders.router";
import cors from "cors";
import mongoose from "mongoose";
import { errorHandler, pageNotFound } from "./middleware/handlers";

export default class App {
	constructor(
		private app: express.Application = express(),
		private PORT: string = config.PORT,
		private MONGO_URI: string = config.MONGO_URI
	) {
		this.setupDatabase();
		this.setupMiddlewares();
		this.setupRoutes();
	}

	private async setupDatabase() {
		try {
			await mongoose.connect(this.MONGO_URI);
			console.log("MongoDB connected successfully");
		} catch (error) {
			console.error("Error connecting to MongoDB:", error);
		}
	}

	private setupMiddlewares() {
		this.app.use(
			cors({ origin: "http://localhost:5500", methods: ["GET", "POST", "PUT"] })
		);
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
	}

	private setupRoutes() {
		this.app.use("/api/user", userRouter);
		this.app.use("/api/business", businessRouter);
		this.app.use("/api/order", ordersRouter);
		this.app.use("*", pageNotFound);
		this.app.use(errorHandler);
	}

	public startServer() {
		this.app.listen(this.PORT, () => {
			console.log(`Server running on port ${this.PORT}`);
		});
	}
}
