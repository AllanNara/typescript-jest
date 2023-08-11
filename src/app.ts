import express from "express";
import config from "./config/config.js";
import userRouter from "./routes/user.router.js";
import businessRouter from "./routes/business.router.js";
import ordersRouter from "./routes/orders.router.js";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const { DB_HOST, DB_USER, DB_PASS, PORT } = config;

mongoose
	.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/?retryWrites=true&w=majority`)
	.then((res) => console.log("MongoDB connected successfully"))
	.catch((err) => console.log("Error to connect MongoDB: ", err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRouter);
app.use("/api/business", businessRouter);
app.use("/api/order", ordersRouter);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
